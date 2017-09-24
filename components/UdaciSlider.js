import React from 'react'
import { withState, compose } from 'recompose'
import { View, Text, Slider, StyleSheet } from 'react-native'

function UdaciSlider({ max, unit, step, value, setValue }) {
  return (
    <View style={styles.container}>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={setValue}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
});

export default compose(
  withState('value', 'setValue', 0)
)(UdaciSlider)