import React from "react"
import { json } from "react-router-dom";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name: "Dummy",
                location: "Default",
            },
        }


        console.log("constructor called");
    }

    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/RupakBoral");
        const data = await response.json();

        this.setState({
            userInfo: data,
        })


        console.log(data);
        console.log("component did mount called");
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    render() {
        const {name, location, avatar_url} = this.state.userInfo;
        console.log("render called");
        return(
            <div className="flex flex-col items-center py-12 gap-4 mx-auto w-1/2">
                <img className="w-1/2 mx-auto" src = {avatar_url}/>
                <h2>Name: {name}</h2>
                <p>Location: {location}</p>
            </div>
        )
    }

}

export default UserClass;