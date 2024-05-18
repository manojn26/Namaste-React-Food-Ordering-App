import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
    const { user } = useContext(UserContext);

    return <h4>This Application is Developed By {user?.name} - {user?.email}</h4>;
};

export default Footer