import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const err = useRouteError()
    // console.log(err);
    const { status, statusText } = err;
    return (
        <div>
            <h1>OOPS!</h1>
            <h2>Something Went Wrong</h2>
            <h2>{status + " : " + statusText}</h2>
        </div>
    )
}

export default ErrorPage