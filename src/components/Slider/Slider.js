// @flow

import React from 'react'
import { withState, compose } from 'recompose'
import { View, Text, Slider as RNSlider } from 'react-native'
import SliderContainer from './SliderContainer'

type Props = {
  max: number,
  unit: string,
  step: number,
  value: number,
  setValue: (val: number) => void,
}

function Slider({ max, unit, step, value, setValue }: Props): React.Element<*> {
  return (
    <SliderContainer>
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