import React from 'react';
import { View, Text, Linking } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Header, Button } from 'react-native-elements'
class HomeScreen extends React.Component {
  state = {
      number: 1
    
  }
  
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text onPress={() => this.setState({number: this.state.number+1})}>Home Screen</Text>
          <Button
            title={this.state.number}
            onPress={() => this.props.navigation.navigate('Test')}
          />
          <Button title="Open Link" onPress={() => Linking.openURL("https://google.com")} style={{marginTop: 20}}/>
        </View>
    );
  }
}
class TestScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Test Screen</Text>
        </View>
    );
  }
}

const AppNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Test: {
    screen: TestScreen
  }
}, {
  initialRouteName: "Home",
  tabBarOptions: {
    style: {
        backgroundColor: '#00BCD4',
        marginTop: -1
    }
  }
});
const AppContainer =  createAppContainer(AppNavigator);
class App extends React.Component {
  render() {
      return (
        <React.Fragment>
          <Header centerComponent={{ text: 'MY TITLE', style: { color: '#fff' }}} backgroundColor='#00BCD4' containerStyle={{margin: -1, backgroundColor:'#00BCD4'}}/>
          <AppContainer />
        </React.Fragment>
      );
  }
}
export default App;