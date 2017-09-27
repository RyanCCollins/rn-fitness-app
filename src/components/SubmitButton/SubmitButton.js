// @flow

import React from 'react'
import Button from './Button'
import ButtonText from './ButtonText'

type Props = {
  onPress: () => void,
}

function SubmitButton({ onPress }: Props) {
  return (
    <Button onPress={onPress}>
      <ButtonText>Submit</ButtonText>
    </Button>
  )
}

export default SubmitButton
