import React from 'react'
import { withState, compose } from 'recompose'
import floor from 'lodash/floor';
import { View, Text, Slider, StyleSheet } from 'react-native'

function UdaciSlider({ max, unit, step, value, setValue }) {
  return (
    <View>
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
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  label: {
    fontSize: 22
  }
});

export default compose(
  withState('value', 'setValue', 0)
)(UdaciSlider)