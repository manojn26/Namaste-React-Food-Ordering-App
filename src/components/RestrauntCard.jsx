

const RestrauntCard = ({ restrauntData }) => {
    return (
        <>
            {
                restrauntData.map((restraunt) => (
                    <div key={restraunt.id} className="card">

                        <img src={restraunt.image} />
                        <h2>{restraunt.name}</h2>
                        <h3>{restraunt.cusines.join(", ")}</h3>
                        <h4>{restraunt.rating} Stars</h4>
                    </div>

                ))
            }
        </>
    );
};

export default RestrauntCard