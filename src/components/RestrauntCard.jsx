import { Link } from "react-router-dom";
import { IMAGE_CDN_URL } from "../constants"

const RestrauntCard = ({ restrauntData }) => {
    return (
        <>
            {
                restrauntData.map((restraunt) => (
                    <div key={restraunt?.info?.id} className="card">
                        <img src={`${IMAGE_CDN_URL}/${restraunt?.info?.cloudinaryImageId}`} />
                        <Link to={`restraunt/${restraunt?.info?.id}`}>
                            <h2>{restraunt?.info?.name}</h2>
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