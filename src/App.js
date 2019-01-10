import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDb3DZqxfliHkVbZLnDDCiCKkojQEl_FxQ',
            authDomain: 'auth-ce6a1.firebaseapp.com',
            databaseURL: 'https://auth-ce6a1.firebaseio.com',
            projectId: 'auth-ce6a1',
            storageBucket: 'auth-ce6a1.appspot.com',
            messagingSenderId: '243124865662'
        });
    }

    render(){
        return (
            <View>
                <Header headerText={"Authentication"}></Header>
                <LoginForm />
            </View>
        );
    }
}

export default App;
