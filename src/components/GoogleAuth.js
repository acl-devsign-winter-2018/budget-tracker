import React, { PureComponent } from 'react';
import firebaseui from 'firebaseui';
import firebase from 'firebase';
import { providers } from '../services/firebase';

const ui = new firebaseui.auth.AuthUI(firebase.auth());

class GoogleAuth extends PureComponent {

  componentDidMount() {
    const { origin } = window.location;
    // const { location } = this.props;
    const { from } = { from: { pathname: '/dashboard' } };
    const { pathname: redirect } = from;

    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: `${origin}${redirect}`,
      callbacks: { 
        signInSuccess: function(currentUser, credential, redirectUrl) {
          console.log(redirectUrl);
          setTimeout(() =>  history.push('/dashboard'), 100);
          return false;
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
        {
          provider: providers.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false
        },
        providers.GoogleAuthProvider.PROVIDER_ID
      ]
    });
  }

  render() {
    return <div id="firebaseui-auth-container"></div>;
  }
}

export default GoogleAuth;