import React from 'react'
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';

const sortObjectsArray = require('sort-objects-array');

class ListComponent extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <SafeAreaView>
            <FlatList
                data={this.props.location_permission ? sortObjectsArray(this.props.points, 'distance', 'asc') : sortObjectsArray(this.props.points, 'address', 'asc')}
                renderItem={({item}) => <Text>{item.address} {item.distance > 0 ? item.distance+" m." : ''} </Text>}
            />
        </SafeAreaView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

const mapStateToProp = (state, ownProps) => {
    return {
        points: state.points,
        location_permission: state.location_permission,
    }
}

export default connect (mapStateToProp)(ListComponent) 
