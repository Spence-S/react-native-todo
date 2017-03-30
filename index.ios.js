/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { Text, View, StyleSheet, Button, Alert, TextInput, ListView, AppRegistry } from 'react-native';


 export default class reactnativetodo extends Component{
   constructor(props){
     super(props);
     this.state = {
       todo: ["First of the list!"],
       text: ''
     }
   }

   pressHandler = () => {
     this.setState({todo: [this.state.text, ...this.state.todo]});
     this.setState({text: ''});
   }

   render() {
   return (
     <View style={styles.mainView}>
       <Text>Hello, NiftyLettuce</Text>
       <TextInput
         style={styles.ip}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         />
       <Button
         title="Just a button"
         style={styles.button}
         onPress={this.pressHandler}
         />
         {this.state.todo.map((todo) => {
           return(<Text> {todo} </Text>)
         })}
     </View>
     );
   }
 }

 const styles = StyleSheet.create({
 mainView: {
     flexDirection: 'column',
     flex:1 ,
     justifyContent: "center",
     alignItems: 'center',
     backgroundColor: '#1F5768'
 },
 button: {
   backgroundColor: "red",
 },
 ip:{
   height: 40,
   backgroundColor: '#EAF8FD',
   borderWidth: 1,
   borderRadius:6,
   width: 300,
   alignSelf:'center'
 }
 });

AppRegistry.registerComponent('reactnativetodo', () => reactnativetodo);
