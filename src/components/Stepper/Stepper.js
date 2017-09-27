// @flow

import React from 'react'
import { withState, compose } from 'recompose'
import StepperContainer from './StepperContainer'
import StepperBase from './StepperBase'
<<<<<<< HEAD:src/components/Stepper/Stepper.js
import MetricCounter from './MetricCounter'
import Unit from './Unit'
import Value from './Value'
=======
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
>>>>>>> d514072cc1dd6c0a3fc9656ec83d539db9201dc3:components/Stepper.js

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
<<<<<<< HEAD:src/components/Stepper/Stepper.js
      <MetricCounter>
        <Value>{value}</Value>
        <Unit>{unit}</Unit>
      </MetricCounter>
    </StepperContainer>
=======
      <View style={styles.metricCounter}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
        <Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
      </View>
    </View>
>>>>>>> d514072cc1dd6c0a3fc9656ec83d539db9201dc3:components/Stepper.js
  )
}

export default compose(
  withState('value', 'setValue', 0),
)(Stepper)
