import { Link } from "react-router-dom";
import { IMAGE_CDN_URL } from "../constants"

const RestrauntCard = ({ restrauntData }) => {
    return (
        <>
            {
                restrauntData.map((restraunt) => (
                    <div key={restraunt?.info?.id} className="card w-56 p-2 m-2 shadow-lg bg-pink-50 rounded-md hover:-skew-y-12">
                        <img src={`${IMAGE_CDN_URL}/${restraunt?.info?.cloudinaryImageId}`} />
                        <Link to={`restraunt/${restraunt?.info?.id}`}>
                            <h2 className="font-bold text-2xl text-purple-900">{restraunt?.info?.name}</h2>
                        </Link>
                        <h3>{restraunt?.info?.cuisines.join(", ")}</h3>
                        <h4>{restraunt?.info?.avgRating} Stars</h4>
                        <h4>Deliverable by {restraunt?.info?.sla?.deliveryTime} Mins</h4>
                        <code>Location : {restraunt?.info?.locality}</code>

                    </div>

                ))
            }
        </>
    );
};

export default RestrauntCard