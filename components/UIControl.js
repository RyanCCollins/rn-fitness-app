// @flow

import React from 'react'
import Slider from './Slider'
import Stepper from './Stepper'

type ControlType = 'slider' | 'stepper'

type Props = {
  type: ControlType,
  key: string,
  value: number,
  onChange: () => void,
  onIncrement: () => void,
  onDecrement: () => void,
}

export default function UIControl({
  type,
  key,
  value,
  onChange,
  onIncrement,
  onDecrement,
  ...rest
}: Props) {
  switch (type) {
    case 'slider':
      return (
        <Slider
          value={value}
          onChange={onChange}
          {...rest}
        />
      )
    case 'stepper':
      return (
        <Stepper
          value={value}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          {...rest}
        />
      )
    default:
      return null
  }
}