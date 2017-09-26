// @flow

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withState, compose } from 'recompose'
import StepperBase from './StepperBase'
import { gray } from '../utils/colors'

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

type Props = {
  setValue: (val: number) => void,
  value: number,
  unit: string,
}

function Stepper({ value, unit, setValue }: Props) {
  return (
    <View style={styles.container}>
      <StepperBase
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
      />
      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
    </View>
  )
}

export default compose(
  withState('value', 'setValue', 0),
)(Stepper)