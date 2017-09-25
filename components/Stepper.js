// @flow

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { withState, compose } from 'recompose'
import StepperBase from './StepperBase'

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
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
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}

export default compose(
  withState('value', 'setValue', 0),
)(Stepper)