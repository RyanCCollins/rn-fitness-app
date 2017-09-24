import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Stepper from 'react-native-simple-stepper'
import { withState, compose } from 'recompose'

function UdaciSteppers({ max, unit, step, value, setValue }) {
  return (
    <View style={styles.container}>
      <Stepper
        stepValue={step}
        initialValue={value}
        maximumValue={max}
        minimumValue={0}
        valueChanged={setValue}
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
)(UdaciSteppers)