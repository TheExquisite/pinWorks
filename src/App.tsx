import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

import Navbar from './components/navbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.maps}>
          <Text>Maps Goes Here</Text>
        </View>
        <View>
          <Navbar/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },

  maps: {
    flex: 1,
    paddingTop: 20
  },

  newPinWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    width: 50,
    height: 50,
    bottom: 15,
    left: 155,
    backgroundColor: '#ffd147',
    borderRadius: 5
  }
});