import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";

interface Props {
  items: any;
}

const INITIAL_REGION: Region = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 9,
    longitudeDelta: 9,
}

const ListingsMap = ({ items }: Props) => {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListingsMap;
