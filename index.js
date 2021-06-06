import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { getDistance } from 'geolib';
import { Alert } from 'react-native'

import store from './store/store';
import { addPoint } from "./actions/addPoint";
import { addLocationPermission } from "./actions/addLocationPermission";
import { addLoaded } from "./actions/addLoaded";

import GetLocation from 'react-native-get-location'

function checkPermission () {
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        store.dispatch(addLocationPermission(true));
        fetchPois(location, true)
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
        store.dispatch(addLocationPermission(false));
        fetchPois()
        Alert.alert(
            'Some services may not work correctly'
        )
    })
}

function fetchPois (location = {}, location_permission = false) {
    store.dispatch(addLoaded(false));
    fetch('https://warply.s3.amazonaws.com/data/test_pois.json')
    .then(response => response.json())
    .then((data) => {

            data.forEach(element => {

                if (location_permission && element.latitude && element.longitude) {
                    element.distance = getDistance([location.latitude, location.longitude], [element.latitude, element.longitude], accuracy = 1)
                } 

                store.dispatch(addPoint(element));
            });

            store.dispatch(addLoaded(true));
        }
        
    )
}

checkPermission();

AppRegistry.registerComponent(appName, () => App);
