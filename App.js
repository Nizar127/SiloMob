import React, { Component } from "react";
import {  createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from 'react-navigation-tabs';
//import {createStackNavigator} from 'react-navigation-stack';
import {createStackNavigator} from 'react-navigation-stack';
//import * as Permissions from 'expo-permissions';
//import CreateTask from './screen/CreateTask';
//import TodoStore from './data/TodoStore';
import Invoice from './screen/Invoice';
import Topup from './screen/Topup';
import Profile from './screen/Profile';
import main from './screen/main';
import { useScreens } from 'react-native-screens';

useScreens();


export default class App extends Component {
  async componentWillMount() {
    await this._askForCalendarPermissions();
    await this._askForReminderPermissions();
  }

  _askForCalendarPermissions = async () => {
    await Permissions.askAsync(Permissions.CALENDAR);
  };

  _askForReminderPermissions = async () => {
    if (Platform.OS === 'android') {
      return true;
    }

    await Permissions.askAsync(Permissions.REMINDERS);
  };

 
 
  render() {
    return (
     // <TodoStore>
         <AppContainer />
    //  </TodoStore>
      
    );
  }
}

const RootStack = createBottomTabNavigator(
  {
      main:main,
      Topup:Topup,
      Invoice: Invoice,
      Profile:Profile
   
  },
  {
    initialRouteName: 'main'
  }
);

// const AppScreen = createStackNavigator(
//   {
//     Details: Details,
//     CreateTask: CreateTask
//   }
// )




const AppContainer = createAppContainer(RootStack);

