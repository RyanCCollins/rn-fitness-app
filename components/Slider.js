// @flow

import React from 'react'
import { withState, compose } from 'recompose'
import { View, Text, Slider as RNSlider, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
})

type Props = {
  max: number,
  unit: string,
  step: number,
  value: number,
  setValue: (val: number) => void,
}

function Slider({ max, unit, step, value, setValue }: Props): React.Element<*> {
  return (
    <View style={styles.container}>
      <RNSlider
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

export default compose(
  withState('value', 'setValue', 0),
)(Slider)