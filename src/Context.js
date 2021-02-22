import React, { Component } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const UserContext = React.createContext();

class UserProvider extends Component {
    // Context state
    state = {
        sideBar: parseInt(window.innerWidth) > 1000 ? true : false,
        csrfToken: Cookies.get("csrftoken"),
        logged_in: localStorage.getItem("access_token") ?

            function() {
                // if (localStorage.getItem("reftoken")) {
                    var payload = { refresh: localStorage.getItem("access_token") };
                    axios
                        .post(`http://127.0.0.1:8000/adminside/hello/`, payload)
                        .then((response) => {
                          
                                return true;
                        })
                        .catch((err) => {
                            console.log(err);
                            return false;
                        });
                // }
            } :
            false,
        updateState: localStorage.getItem("reftoken") ?
            setInterval(function() {
                if (localStorage.getItem("reftoken")) {
                    var payload = { refresh: localStorage.getItem("reftoken") };
                }
            }, 100000) :
            false,
    };

    setSidebar = (sideBar) => {
        this.setState((prevState) => ({ sideBar }));
    };
    setLoggedIn = (logged_in) => {
        // console.log('in context api',logged_in)
        this.setState((prevState) => ({ logged_in }));
    };

    setUpdateState = () => {};

    render() {
        const { children } = this.props;
        const { sideBar, logged_in, csrfToken, updateState } = this.state;
        const { setSidebar, setLoggedIn } = this;

        return ( <
            UserContext.Provider value = {
                {
                    sideBar,
                    setSidebar,
                    logged_in,
                    setLoggedIn,
                    csrfToken,
                    updateState,
                }
            } >
            { children } </UserContext.Provider>
        );
    }
}

export default UserContext;

export { UserProvider };