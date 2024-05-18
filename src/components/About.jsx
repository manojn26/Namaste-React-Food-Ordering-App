import { Outlet } from "react-router-dom"
import Profile from "./ProfileClass"
import ProfileFunctionalComponent from "./Profile"
import { Component } from "react"
import UserContext from "../utils/userContext"

// const About2 = () => {
//     return (
//         <>
//             <h1>About Page</h1>
//             <p>The course I learning currently is Namaste React</p>

//             {/* <Outlet /> */}
//             <Profile name={"Manoj Kumar N"} />
//             <ProfileFunctionalComponent name={"Manoj"} />

//         </>
//     )
// }

class About extends Component {
    constructor(props) {
        super(props)
        console.log("About Component Contructor");
    }

    // async componentDidMount() {
    //     // console.log("About Component Did Mount");
    //     const data = await fetch("https://api.github.com/users/manojn26")
    //     const jsonData = await data.json()
    //     const { name, created_at } = jsonData;
    //     console.log(name, created_at);

    // }


    render() {
        console.log("About Component Render");
        return (
            <>
                <h1>About Page</h1>
                <p>The course I learning currently is Namaste React</p>

                <UserContext.Consumer>
                    {({ user }) => <>
                        <h4 className="font-bold text-xl p-10">{user?.name} - {user?.email}</h4>
                    </>}
                </UserContext.Consumer>

                {/* <Outlet /> */}
                <ProfileFunctionalComponent name={"first child"} />

            </>
        )
    }
}

export default About