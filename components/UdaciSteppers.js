import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withState, compose } from 'recompose'
import Stepper from './Stepper'

function Slider() {

}

function UdaciSteppers({ max, unit, step, value, setValue }) {
  return (
    <View style={styles.container}>
      <Stepper
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
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