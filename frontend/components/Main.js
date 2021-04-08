import React, {Component} from "react"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators} from "redux"
import {fetchUser, fetchUserPosts} from "./redux/actions/index"
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"

import FeedScreen from "./main/Feed"
import ProfileScreen from "./main/Profile"
import SearchScreen from "./main/Search"

const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
    return null
}


export class Main extends Component {

componentDidMount(){
this.props.fetchUser()
this.props.fetchUserPosts()

}

    render(){
      
      const {currentUser} = this.props
      console.log(currentUser);

      if (currentUser == undefined) {
          return <View></View>
        }

        return (
            <Tab.Navigator initialRoutename="Feed" >
                <Tab.Screen name="Feed" component={FeedScreen}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26} />
                                ),
                            }} />
                <Tab.Screen name="Search" component={SearchScreen} navigation={this.props.navigation}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="magnify" color={color} size={26} />
                                ),
                            }} />
    <Tab.Screen name="Fai una foto" component={EmptyScreen}
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Profilo" component={ProfileScreen}
                  listeners={({ navigation }) => ({
                    tabPress: event => {
                        event.preventDefault();
                        navigation.navigate("Profile",{uid: firebase.auth().currentUser.id})
                    }
                })}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                                ),
                            }} />
            </Tab.Navigator>
       
        )
    }
}



const mapStateProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser, fetchUserPosts}, dispatch)

export default connect(mapStateProps, mapDispatchProps)(Main)