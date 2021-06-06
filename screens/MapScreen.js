import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Marker } from 'react-native-maps';
import { ClusterMap } from 'react-native-cluster-map';
import { connect } from 'react-redux';

class MapScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      averageLongitude: this.props.points.reduce((total, next) => total + parseFloat(next.longitude) > 0 ? parseFloat(next.longitude) : 0, 0),
      averageLatitude: this.props.points.reduce((total, next) => total + parseFloat(next.latitude) > 0 ? parseFloat(next.latitude) : 0, 0) 
    }
  }

  render() {

    return (
      <View style={styles.container}> 
        <ClusterMap
          region={{
            latitude: this.state.averageLatitude,
            longitude: this.state.averageLongitude,
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
        >
 
          {
            this.props.points.map((point) => {
                return <Marker key={point.latitude} coordinate={{ latitude: parseFloat(point.latitude), longitude: parseFloat(point.longitude) }} />  
            })
          }
        
        </ClusterMap>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 600,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

 const mapStateToProp = (state, ownProps) => {
  return {
      points: state.points,
      location_permission: state.location_permission,
  }
}

export default connect (mapStateToProp)(MapScreen) 
