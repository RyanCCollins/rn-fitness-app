// @flow

import React from 'react'
import { withState, compose } from 'recompose'
import StepperContainer from './StepperContainer'
import StepperBase from './StepperBase'
import MetricCounter from './MetricCounter'
import Unit from './Unit'
import Value from './Value'

type Props = {
  setValue: (val: number) => void,
  value: number,
  unit: string,
}

function Stepper({ value, unit, setValue }: Props) {
  return (
    <StepperContainer>
      <StepperBase
        onDecrement={() => setValue(value - 1)}
        onIncrement={() => setValue(value + 1)}
      />
      <MetricCounter>
        <Value>{value}</Value>
        <Unit>{unit}</Unit>
      </MetricCounter>
    </StepperContainer>
  )
}

export default compose(
  withState('value', 'setValue', 0),
)(Stepper)
