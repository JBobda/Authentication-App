import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedIn: null
    };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDb3DZqxfliHkVbZLnDDCiCKkojQEl_FxQ',
            authDomain: 'auth-ce6a1.firebaseapp.com',
            databaseURL: 'https://auth-ce6a1.firebaseio.com',
            projectId: 'auth-ce6a1',
            storageBucket: 'auth-ce6a1.appspot.com',
            messagingSenderId: '243124865662'
        });

        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size={'large'}/>;       
        }
    }

    render() {
        return (
            <View>
                <Header headerText={'Authentication'} />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
