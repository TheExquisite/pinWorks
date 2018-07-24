import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Navbar from './components/navbar';
const initialLatitude = -27.4766589;
const initialLongitude = 153.0241978;
const initialLatitudeDelta = 0.0922;
const initialLongitudeDelta = 0.0421;
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            watchID: null,
            region: {
                latitude: initialLatitude,
                longitude: initialLongitude,
                latitudeDelta: initialLatitudeDelta,
                longitudeDelta: initialLongitudeDelta
            }
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: initialLatitudeDelta,
                    longitudeDelta: initialLongitudeDelta
                }
            });
        }, error => {
            console.log(error.message);
        }, {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        });
        let watch = navigator.geolocation.watchPosition(position => {
            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: initialLatitudeDelta,
                    longitudeDelta: initialLongitudeDelta
                }
            });
        }, error => {
            console.log(error.message);
        }, {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        });
        this.setState({
            watchID: watch
        });
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.state.watchID);
    }
    render() {
        return (<KeyboardAvoidingView style={styles.wrapper} behavior='padding'>
      <View style={styles.topBar}/>
      <MapView style={styles.maps} initialRegion={{
            latitude: -27.4766589,
            longitude: 153.0241978,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }}>
        <Marker title={"Test marker"} description={"test marker"} coordinate={{
            latitude: -27.4766589,
            longitude: 153.0241978
        }} draggable/>
        <Marker coordinate={this.state.region} title={"Me"} pinColor={"#ffd147"}/>
      </MapView>
      <Navbar />
      </KeyboardAvoidingView>);
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