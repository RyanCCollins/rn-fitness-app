// @flow
import React from 'react'
import { Platform } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { purple, white } from '../../utils/colors'
import StepBaseContainer from './StepperBaseContainer'
import AndroidButton from './AndroidButton'
import IosButton from './IosButton'
import ButtonRow from './ButtonRow'

type Props = {
  onDecrement: () => void,
  onIncrement: () => void,
}

export default function StepperBase({
  onIncrement,
  onDecrement,
}: Props) {
  return (
    <StepBaseContainer>
      {(() => {
        switch (Platform.OS) {
          case 'ios':
            return (
              <ButtonRow>
                <IosButton
                  direction="right"
                  onPress={onDecrement}
                >
                  <Entypo name="minus" size={30} color={purple} />
                </IosButton>
                <IosButton
                  direction="left"
                  onPress={onIncrement}
                >
                  <Entypo name="plus" size={30} color={purple} />
                </IosButton>
              </ButtonRow>
            )
          case 'android':
            return (
              <ButtonRow>
                <AndroidButton onPress={onDecrement}>
                  <FontAwesome name="minus" size={30} color={white} />
                </AndroidButton>
                <AndroidButton onPress={onIncrement}>
                  <FontAwesome name="plus" size={30} color={white} />
                </AndroidButton>
              </ButtonRow>
            )
          default: return null
        }
      })()}
    </StepBaseContainer>
  )
}
