import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      uri1: require('./src/images/dice1.png'),
      uri2: require('./src/images/dice1.png'),
      uri3: require('./src/images/dice1.png')
    }
  }

  getRandomNumber = () => {
    return Math.floor(Math.random()* 6) + 1
  }

  playBtnPressed = () => {
    let rNumber1 = this.getRandomNumber()
    let rNumber2 = this.getRandomNumber()
    let rNumber3 = this.getRandomNumber()

    // Generate dice image from 1 to 6 for dice number 1
    switch (rNumber1) {
      case 1:
        this.setState({ uri1: require('./src/images/dice1.png' )})
        this.setState({ value1: '100'})
        break;
      case 2:
        this.setState({ uri1: require('./src/images/dice2.png' )})
        this.setState({ value1: '2'})
        break;
      case 3:
        this.setState({ uri1: require('./src/images/dice3.png' )})
        this.setState({ value1: '3'})
        break;
      case 4:
        this.setState({ uri1: require('./src/images/dice4.png' )})
        this.setState({ value1: '4'})
        break;
      case 5:
        this.setState({ uri1: require('./src/images/dice5.png' )})
        this.setState({ value1: '5'})
        break;
      case 6:
        this.setState({ uri1: require('./src/images/dice6.png' )})
        this.setState({ value1: '60'})
        break;
    
      default:
          this.setState({ uri1: require('./src/images/dice1.png' )})
          this.setState({ value1: '1'})
        break;e
    }

    // Generate dice image from 1 to 6 for dice number 2
    switch (rNumber2) {
      case 1:
        this.setState({ uri2: require('./src/images/dice1.png' )})
        this.setState({ value2: '100'})
        break;
      case 2:
        this.setState({ uri2: require('./src/images/dice2.png' )})
        this.setState({ value2: '2'})
        break;
      case 3:
        this.setState({ uri2: require('./src/images/dice3.png' )})
        this.setState({ value2: '3'})
        break;
      case 4:
        this.setState({ uri2: require('./src/images/dice4.png' )})
        this.setState({ value2: '4'})
        break;
      case 5:
        this.setState({ uri2: require('./src/images/dice5.png' )})
        this.setState({ value2: '5'})
        break;
      case 6:
        this.setState({ uri2: require('./src/images/dice6.png' )})
        this.setState({ value2: '60'})
        break;
    
      default:
          this.setState({ uri2: require('./src/images/dice1.png' )})
          this.setState({ value2: '1'})
        break;e
    }

    // Generate dice image from 1 to 6 for dice number 3
    switch (rNumber3) {
      case 1:
        this.setState({ uri3: require('./src/images/dice1.png' )})
        this.setState({ value3: '100'})
        break;
      case 2:
        this.setState({ uri3: require('./src/images/dice2.png' )})
        this.setState({ value3: '2'})
        break;
      case 3:
        this.setState({ uri3: require('./src/images/dice3.png' )})
        this.setState({ value3: '3'})
        break;
      case 4:
        this.setState({ uri3: require('./src/images/dice4.png' )})
        this.setState({ value3: '4'})
        break;
      case 5:
        this.setState({ uri3: require('./src/images/dice5.png' )})
        this.setState({ value3: '5'})
        break;
      case 6:
        this.setState({ uri3: require('./src/images/dice6.png' )})
        this.setState({ value3: '60'})
        break;
    
      default:
          this.setState({ uri3: require('./src/images/dice1.png' )})
          this.setState({ value3: '1'})
        break;e
    }
  }

  totalSum = (rNumber1, rNumber2, rNumber3) => {
    return Math.floor(rNumber1 + rNumber2 + rNumber3)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <Image style={styles.image}
          source = {this.state.uri1}
          />
          <Image style={styles.image}
          source = {this.state.uri2}
          />
          <Image style={styles.image}
          source = {this.state.uri3}
          />
        </View>
        <View style={styles.flex}>
          <Text style={styles.flextext}> {this.state.value1} </Text>
          <Text style={styles.flextext}> {this.state.value2} </Text>
          <Text style={styles.flextext}> {this.state.value3} </Text>
        </View>

        <Text style={styles.totaltext}>Total: {this.totalSum(parseInt(this.state.value1), parseInt(this.state.value2), parseInt(this.state.value3))}</Text>

        <TouchableOpacity onPress = {this.playBtnPressed}>
          <Text style = {styles.gameBtn}>
            Play Game
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}