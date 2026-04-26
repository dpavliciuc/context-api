import brand from "../assets/BidBgLogo.png"

const About = () => {
  return (
    <div className="bg-washedblue flex-col-j-center mt-10">
      <h3 className="text-center font-semibold md:text-3xl text-2xl py-10">About us</h3>

      <div className="flex-col-i-j-center md:flex-row gap-20 px-10 pb-10">
        
        <div className="md:text-xl sm:text-lg mb-10 max-w-xl text-center md:text-left">
          <p>
            We deliver high-quality products efficiently by letting users bid on them.
            The purpose of this app is to allow users to bid passionately on products
            that are truly worth their money.
          </p>
          <p className="mt-10">
            BID was founded in 1994 and transformed into a digital platform in 2010.
            (The information above is false and serves as an example description)
          </p>
        </div>

        <div>
          <img src={brand} alt="brand" className="w-120 mx-auto" />
        </div>

      </div>
    </div>
  )
}

export default About;