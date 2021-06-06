import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

class Home extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style={styles.container}>
          <Spinner
            visible={!this.props.loaded}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
            <Text style={styles.text}>Hello</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.props.navigation.navigate('Tabs')}
            >
            <Text style={styles.buttonText}>Go to Next Screen</Text>
            </TouchableOpacity>
        </View>
      )
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
      loaded: state.loaded,
  }
}

export default connect (mapStateToProp)(Home) 