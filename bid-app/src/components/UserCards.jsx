import { useEffect, useState } from "react";
import { useCardContext } from "../providers/CardProvider"
import usersdata from "../json/users.json"
import "../styles/UserBids.css"
import profileImg from "../assets/user.png"

const data = usersdata;

const UserCards = () => {

    const { bidders, setBidders } = useCardContext();

    useEffect(() => {
        const sortedBidders = [...data].sort((a, b) => b.money - a.money);
        setBidders(sortedBidders);
    }, [setBidders]);

    return(
    <>

   {bidders?.map((bidder) => (
    <div key={bidder.id}>
    <div className="bg-washedblue card">
    <div className="flex-col items-center text-center mb-5">
    <h3 className="lg:text-xl sm:text-lg">{bidder.name}</h3>
    </div>

    <div className="flex flex-col items-center gap-5">
    <div className="usercards">
    <img src={profileImg} alt="user" className="usercards2" />
    </div>

    <div className="mb-5">
    <h3 className="lg:text-2xl">{bidder.money}$</h3>
    </div>
    </div>
    </div>
    </div>
    ))}
    </>
    )
}

export default UserCards;