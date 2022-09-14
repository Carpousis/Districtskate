import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  console.log(location ? JSON.stringify(location, undefined, 2): null)

  // https://github.com/react-native-maps/react-native-maps

  return (
    <SafeAreaView className="flex w-screen h-screen bg-black">
      <MapView 
        className="w-screen h-5/6"
        region={location?.coords? {
          latitude: 38.8965205,
          longitude: -77.0320979,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        } : undefined}
      >
        <Marker
          title="Freedom Plaza"
          description="chill plaza, lots of good ledges, small drop in"
          coordinate={{ latitude: 38.8965205, longitude: -77.0320979 }}
        /> 
      </MapView>
      <SafeAreaView className="h-1/6">
        <Text className="text-white ">Skate Map</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}
