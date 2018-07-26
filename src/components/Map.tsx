import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const initialLatitude = -27.4766589;
const initialLongitude = 153.0241978;
const initialLatitudeDelta = 0.0922;
const initialLongitudeDelta = 0.0421;

interface IAppState {
  watchID: number,
  region: {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
  }
}

export default class Map extends React.Component<{}, IAppState> {
  constructor(props: any){
    super(props);

    this.state = {
      watchID: null,
      region: {
        latitude: initialLatitude,
        longitude: initialLongitude,
        latitudeDelta: initialLatitudeDelta,
        longitudeDelta: initialLongitudeDelta
      }
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: initialLatitudeDelta,
            longitudeDelta: initialLongitudeDelta
          }
        })
      },
      error => {
        console.log(error.message)
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    );

    let watch = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: initialLatitudeDelta,
            longitudeDelta: initialLongitudeDelta
          }
        });
      },
      error => {
        console.log(error.message)
      },
      {
        timeout: 20000,
        maximumAge: 1000,
        enableHighAccuracy: true
        //need to find out to add:
        //distanceFilter: 2
      }
    )

    this.setState({
      watchID: watch
    })
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.state.watchID)
  }

  render(){
    return(
      <MapView
        style={ styles.map }
        initialRegion={{
          latitude: -27.4766589,
          longitude: 153.0241978,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          title={"Test marker"}
          description={"test marker"}
          coordinate={{
            latitude: -27.4766589,
            longitude: 153.0241978
          }}
          draggable
        />
        <Marker 
          coordinate={this.state.region} 
          title={"Me"}
          pinColor={"#ffd147"}
        />
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },

  map: {
    flex: 1,
  }
});