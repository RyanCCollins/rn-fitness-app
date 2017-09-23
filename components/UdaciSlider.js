import React from 'react'
import { View, Text, Slider, StyleSheet } from 'react-native'

export default function UdaciSlider () {
  return (
    <View style={styles.container}>
      <Text>UdaciSlider</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
});
