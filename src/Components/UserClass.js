import React from "react";



class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                login: "Dummy",
                id: "834893",
                avatar_url: "sdfsdfld"

            }
        }
    };

    async componentDidMount() {
        try {
            
            let res = await fetch('https://api.github.com/users/atul-2002');
            let json = await res.json();
            this.setState({
                userInfo: json,
            })
        } catch (error) {
         console.log(error)   
        }
        
    }

    render() {

        const { login, id, avatar_url } = this.state.userInfo;
        debugger;
        return <div className="user">
            <h1>{login}</h1>
            <h3>{id}</h3>
            <img src={avatar_url} />
        </div>
    }
}

export default UserClass;