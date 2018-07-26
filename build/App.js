import * as React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import NavbarContainer from './components/NavbarContainer';
import MapContainer from './components/MapContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/rootReducer';
const store = createStore(rootReducer);
export default class App extends React.Component {
    render() {
        return (<Provider store={store}>
        <KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
          <View style={styles.topBar}/>
          <MapContainer />
          <NavbarContainer />
        </KeyboardAvoidingView>
      </Provider>);
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    topBar: {
        height: 24,
        backgroundColor: '#ff143b'
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
//# sourceMappingURL=App.js.map