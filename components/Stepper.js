// @flow
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { black } from '../utils/colors'

type Props = {
  onDecrement: () => void,
  onIncrement: () => void,
}

export default function Stepper({
  onDecrement,
  onIncrement,
}: Props) {
  return (
    <View>
      <TouchableOpacity onPress={onDecrement}>
        <FontAwesome name="minus" size={30} color={black} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onIncrement}>
        <Entypo name="plus" size={30} color={black} />
      </TouchableOpacity>
    </View>
  )
}