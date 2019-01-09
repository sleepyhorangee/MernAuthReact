import React, { Component } from "react"
// import "./Start.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import  { BrowserRouter as Router, Route } from "react-router-dom"
// import Navbar from './components/CustomNavbar';
import App from "./App"
import AppNavbar from './components/AppNavbar';


firebase.initializeApp({
    apiKey: "AIzaSyCd2KQ2E7FkBFx1jnxu0B-flFmQzRo2lZc",
    authDomain: "reactauthgoogfbgittwiem.firebaseapp.com",
    databaseURL: "https://reactauthgoogfbgittwiem.firebaseio.com",
    projectId: "reactauthgoogfbgittwiem",
    storageBucket: "reactauthgoogfbgittwiem.appspot.com",
    messagingSenderId: "48567056176"

})

class Start extends Component {
    state = { isSignedIn: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }

    render() {
        return (
            <div className="Start">
                <Router>
                    <div>
                        <Route path="/" component={Start} exact />
                        {/* <Navbar />
                         <Route path ="/App" component = {App}  />
                        <Route path="/about" component={About} />
                        <Route path="/news" component={News} /> */}
                    </div>
                </Router>
                 <AppNavbar />
                {this.state.isSignedIn ? (
                    <span>
                        <div>Signed In!</div>
                        <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                        <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                            <img class="login-pic"
                                alt="profile picture"
                                src={firebase.auth().currentUser.photoURL}
                            />
                    </span>
                ) : (
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    )}
            </div>
        )
    }
}

export default Start
