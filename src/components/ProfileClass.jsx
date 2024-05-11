import React from "react";

class Profile extends React.Component {

    // Whenever we load the Class constructor is loading the first thing
    constructor(props) {
        super(props)

        // Create State
        // All state variables should be created at one place.
        this.state = {
            value: 0,
            anotherValue: 0,
            userInfo: {
                name: "Dummy Name",
                created_at: "Dummy Location",
                avatar_url: ""
            }
        }

        console.log("Profile Component Constructor" + this.props.name);
    }

    async componentDidMount() {
        console.log("Profile Component Did Mount" + this.props.name);
        const data = await fetch("https://api.github.com/users/manojn26")
        const jsonData = await data.json()
        const { name, created_at, avatar_url } = jsonData;
        console.log(name, created_at, avatar_url);
        this.setState({
            userInfo: jsonData
        })

        // It is the best place to make an API Call
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        const { value, anotherValue } = this.state;
        console.log("Profile Component Render" + this.props.name);
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name : {this.props.name}</h2>

                <code>Count : {value}</code>
                <button onClick={() => this.setState({
                    value: value + 1,
                    anotherValue: anotherValue + 1
                })}>Increment Value</button>

                <br />

                <code>Another Count : {anotherValue}</code>
                {/* <button onClick={() => this.setState({
                    anotherValue: anotherValue + 1
                })}>Increment Another Value</button> */}

                <div>
                    <h1>Github User Details</h1>
                    <p>Name : {this.state.userInfo.name}</p>
                    <p>Created At : {this.state.userInfo.created_at}</p>
                    <img src={this.state.userInfo.avatar_url} alt="Not Loaded" width={100} height={100} />
                </div>
            </div>

        )
    }

}

export default Profile

/*
    Parent Constrcutor
    Parent Render
    Child Constructor
    Child Render


    Below is Commit phase :
    DOM is updated
    json is logged in console
    Child Component Did mount
    Parent Component Did Mount

    API Call
    Set state

    -------------
    Child Constructor
    Child render
    Child componentDidMount

  

 
*/