import { useEffect, useRef, useState } from "react";
import { useCardContext } from "../providers/CardProvider";
import usersdata from "../json/users.json";
import CountdownBar from "./CountdownBar";


import crownIco from "../assets/crown.png";
import '../styles/BidSection.css'

export default function BidSection({ showNotification, advanceItem }) {

  const [bidAmount, setBidAmount] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [roundActive, setRoundActive] = useState(true);
  const [roundKey, setRoundKey] = useState(0);
  const resetTimeoutRef = useRef(null);
  const { bidders, setBidders } = useCardContext();
  const defaultBidders = usersdata;

  const highestBid = bidders?.reduce((max, bidder) => Math.max(max, bidder.money), 0) ?? 0;
  const highestBidder = bidders?.reduce((top, bidder) => (!top || bidder.money > top.money ? bidder : top), null);
  const bidValue = Number(bidAmount);
  const canSubmitBid = roundActive && agreeToTerms && bidAmount !== "" && Number.isFinite(bidValue) && bidValue > highestBid;

  const placeBid = (bidderId, amount, isUser = false) => {
    const nextBidders = bidders.map((bidder) =>
      bidder.id === bidderId ? { ...bidder, money: amount } : bidder
    );
    const sortedBidders = [...nextBidders].sort((a, b) => b.money - a.money);
    setBidders(sortedBidders);

    const bidder = sortedBidders.find((bidder) => bidder.id === bidderId);
    if (!bidder) return;
    showNotification(`${isUser ? "You" : bidder.name} placed a bid of $${amount}`);
  };

  const handleBid = () => {
    if (!canSubmitBid) return;

    const you = bidders.find((bidder) => bidder.name === "You");
    if (!you) return;

    placeBid(you.id, bidValue, true);
    setBidAmount("");
  };

  const handleRoundEnd = () => {
    setRoundActive(false);
    if (highestBidder) {
      showNotification(`Bid ended. Winner is ${highestBidder.name} with $${highestBidder.money}`);
    } else {
      showNotification("Bid ended with no winner.");
    }

    resetTimeoutRef.current = setTimeout(() => {
      setBidders([...defaultBidders].sort((a, b) => b.money - a.money));
      setRoundActive(true);
      setRoundKey((key) => key + 1);
      setBidAmount("");
      setAgreeToTerms(false);
      advanceItem();
    }, 10000);
  };

  useEffect(() => {
    return () => clearTimeout(resetTimeoutRef.current);
  }, []);

  useEffect(() => {
    if (!roundActive || !bidders?.length) return;

    const interval = setInterval(() => {
      if (Math.random() < 0.2) {
        const currentHighest = bidders.reduce((max, bidder) => Math.max(max, bidder.money), 0);
        const availableBidders = bidders.filter((bidder) => bidder.name !== "You");
        if (!availableBidders.length) return;

        const randomBidder = availableBidders[Math.floor(Math.random() * availableBidders.length)];
        const nextAmount = currentHighest + Math.ceil(Math.random() * 20);
        placeBid(randomBidder.id, nextAmount);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [roundActive, bidders, showNotification]);

  return (

        <div className="flex flex-col gap-4 bg-washedblue">

          {/* Bid Form */}
          <div className="placingbidstyle">
          <div className="lg:flex-col-j-start w-80">
            <div className="space-y-8">

              <div className="flex-col-i-center">
                <label className="placebid" htmlFor="/bid">
                  Place your bid
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="bid"
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="0"
                    className="inputstyle"
                  />
                  <span className="text-xl font-medium text-gray-700 shrink-0">USD</span>
                </div>
              </div>

              <div className="flex-i-j-center gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm">
                  I have read and agree to the{" "}
                  <button type="button" className="termsstyle">
                    terms of service
                  </button>
                </label>
              </div>

              <button
                onClick={handleBid}
                disabled={!canSubmitBid}
                className={`
                px-30 py-2 mb-5 rounded-lg font-medium text-gray-800 transition-all mx-auto block
                disabled:cursor-not-allowed
                 ${canSubmitBid ? "hover:shadow-lg cursor-pointer" : ""}
                 `}
                style={{ backgroundColor: "#FFD900", opacity: canSubmitBid ? 1 : 0.5 }}
              >
                Bid
              </button>

            </div>
          </div>
          </div>         
          {/* Crown on top of Bar */}
          <div className="timercrown">
            <div className="flex justify-end mb-2">
              <div className="flex-col-i-center">
                <img src={crownIco} className="w-8 h-auto mb-1" />
                <p className="text-sm font-medium text-gray-700">Last Bid: {highestBidder?.name ?? "No bids yet"} (${highestBid})</p>
              </div>
            </div>
            <CountdownBar
              key={roundKey}
              duration={10000}
              height="h-4"
              color="from-gray-500 to-blue-500"
              onExpire={handleRoundEnd}
              repeat={false}
            />
        
          </div>
        </div>
  );
}