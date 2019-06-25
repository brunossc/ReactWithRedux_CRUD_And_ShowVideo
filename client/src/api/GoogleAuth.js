import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut } from '../actions/';

class GoogleAuth extends React.Component {

    componentDidMount() {
        // Using google Auth like scope inform this is for get access to e-mail info.
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '56346690139-ra7vu977njgjfj8le2oic4bgs5t8usbd.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (IsSignedIn) => {
        if (IsSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId());
        else
            this.props.signOut();

    }

    googleSignIn = async () => {
        await this.auth.signIn();
    }

    googleSignOut = async () => {
        await this.auth.signOut();
    }

    renderAuthButton() {

        if (this.props.isSignedIn == null)
        {
            return <div>Trying checking auth with Google...</div>;
        }
        else if (this.props.isSignedIn)
            return (<div>
                <button className="ui green google button" onClick={this.googleSignOut}>
                    <i className="google icon" />
                    Google Sign-Out
                </button>
            </div>);
        else
            return (<div>
                <button className="ui red google button" onClick={this.googleSignIn}>
                    <i className="google icon" />
                    Google Sign-In
            </button>
            </div>);
        
            
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) =>
{
    return { 
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
     };
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);