import UserCards from "./UserCards"

export default function UserBids() {
    return (
        <div className="mt-10">
            <p className="text-2xl font-semibold md:text-3xl text-center mt-0 mb-10">Current Bidders</p>
            <div className="flex justify-between mx-5">
                <UserCards />
            </div>
        </div>
    )
}