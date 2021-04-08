import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import  firebase from "firebase"

import thunk from 'redux-thunk'
import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux"
import rootReducer from "./components/redux/reducers"

const store = createStore(rootReducer, applyMiddleware(thunk))


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4sD5VZ1uwLhxBshPbKMJxTFuXTgcjysY",
  authDomain: "instagram-clone-818a9.firebaseapp.com",
  projectId: "instagram-clone-818a9",
  storageBucket: "instagram-clone-818a9.appspot.com",
  messagingSenderId: "554683871955",
  appId: "1:554683871955:web:fa0e3b17a36b6fc0f85a26",
  measurementId: "G-BECPBR9JZS"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer} from "@react-navigation/native"
import { createStackNavigator} from "@react-navigation/stack"

import LandingSrcreen from "./components/auth/Landing"
import RegisterSrcreen from "./components/auth/Register"
import MainScreen from "./components/Main"
import AddScreen from "./components/main/Add"
import SaveScreen from "./components/main/Save"

const Stack = createStackNavigator();


class App extends Component {
constructor(props){
  super(props);

  this.state = {
    loaded: false,
    loggedIn: false
  }
  
}

componentDidMount(){
  firebase.auth().onAuthStateChanged((user)=> {
    if(!user){
      this.setState({
        loggedIn: false,
        loaded: true
      })
    }else {
      this.setState({
        loggedIn: true,
        loaded: true
      })
    }
  })
}

  render() {

 const {loggedIn,loaded} = this.state


 if(!loaded){

  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text>Loading</Text>
    </View>

  )


 }

 if(!loggedIn){

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" >
        <Stack.Screen name="Landing" component={LandingSrcreen} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={RegisterSrcreen} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>

    )

 }

    return (
      
      <Provider store={store}>
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" >
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}} />     
        <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation} />     
        <Stack.Screen name="Save" component={SaveScreen} />     
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
 
    )
  
}
}


export default App


