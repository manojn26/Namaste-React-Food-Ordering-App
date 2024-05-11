import { useEffect, useState } from "react"

const Profile = (props) => {

    const [value, setValue] = useState(0)
    const [anotherValue, setAnotherValue] = useState(0)

    // Executed after render
    useEffect(() => {
        // API Call
        // console.log("API Called");

        const timer = setInterval(() => {
            console.log("Namaste React OP");
        }, 1000);

        console.log("Use Effect");
        return () => {
            // this is like unmounting
            clearInterval(timer)
            console.log("useEffect Return");
        }

    }, [])
    console.log("render from function component");

    return (
        <div>
            <h1>This is My Profile Page Functional</h1>
            <h3>Name : {props.name}</h3>
            <code>Value : {value}</code>

            <button onClick={() => {
                setValue(value + 1)
                setAnotherValue(anotherValue + 1)
            }}>Increment</button>

            <code>{anotherValue}</code>
        </div>
    )
}

export default Profile