// @flow

import React from 'react'
import { withState, compose } from 'recompose'
<<<<<<< HEAD:src/components/Slider/Slider.js
import { View, Text, Slider as RNSlider } from 'react-native'
import SliderContainer from './SliderContainer'
=======
import { View, Text, Slider as RNSlider, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
})
>>>>>>> d514072cc1dd6c0a3fc9656ec83d539db9201dc3:components/Slider.js

type Props = {
  max: number,
  unit: string,
  step: number,
  value: number,
  setValue: (val: number) => void,
}

function Slider({ max, unit, step, value, setValue }: Props): React.Element<*> {
  return (
<<<<<<< HEAD:src/components/Slider/Slider.js
    <SliderContainer>
=======
    <View style={styles.container}>
>>>>>>> d514072cc1dd6c0a3fc9656ec83d539db9201dc3:components/Slider.js
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
    </SliderContainer>
  )
}

export default compose(
  withState('value', 'setValue', 0),
)(Slider)