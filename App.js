/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  Alert,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Tabs from 'react-native-tabs'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:'broadcaster'
    }
  }

  renderMain () {
    const {page} = this.state
    if (page === 'broadcaster') {
      return <View>
        <Text>Broadcaster</Text>
        <Button title='Share my location'
          onPress={_ => Alert.alert('Start Broadcasting')}/>
      </View>
    }
    else
      return <View>
        <Text>Tracker</Text>
      </View>
  }
  render() {
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} 
          style={{backgroundColor:'white'}} 
          selectedStyle={{color:'#00C197'}} 
          onSelect={el=>this.setState({page:el.props.name})}>
            <Text name='broadcaster' selectedIconStyle={styles.selectedIconStyle}>Broadcaster</Text>
            <Text name='tracker' selectedIconStyle={styles.selectedIconStyle}>Tracker</Text>
        </Tabs>
        {this.renderMain()}

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  selectedIconStyle: {
    borderTopWidth:2,
    borderTopColor:'#00C197'
  }
})

