import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Geolocation from '@react-native-community/geolocation';

export default function App() {
  const [GPS, setGPS] = useState();
  const [GPSW, setGPSW] = useState();

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = position;
        setGPS(initialPosition);
      },
      error => console.log('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000},
    );
  };

  Geolocation.watchPosition(
    position => {
      const initialPosition = position.coords.latitude;
      setGPSW(initialPosition);
    },
    error => console.log('Error', JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000},
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Geolocation Test</Text>
      <View style={styles.resultBody}>
        <View>
          <Text style={styles.result}>
            Latitude: {GPS && GPS.coords.latitude}
          </Text>
          <Text style={styles.result}>
            Longitude: {GPS && GPS.coords.longitude}
          </Text>
          <Text style={styles.result}>
            Accuracy: {GPS && GPS.coords.accuracy}
          </Text>
          <Text style={styles.result}>
            Altitude: {GPS && GPS.coords.altitude}
          </Text>
          <Text style={styles.result}>
            Heading: {GPS && GPS.coords.heading}
          </Text>
          <Text style={styles.result}>Speed: {GPS && GPS.coords.speed}</Text>
          <Text style={styles.result}>Timestamp: {GPS && GPS.timestamp}</Text>
          <Text style={styles.result}>Watch position: {GPSW && GPSW}</Text>
        </View>
      </View>
      <View style={styles.btnBody}>
        <TouchableOpacity style={styles.btn} onPress={getLocation}>
          <Text style={styles.btnText}> Show GPS </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#7c9ec0',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  btnBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
  },
  result: {
    fontSize: 18,
    color: '#000',
  },
  resultBody: {
    marginTop: 100,
  },
});
