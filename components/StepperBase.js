// @flow
import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { black, blue } from '../utils/colors'

type Props = {
  onDecrement: () => void,
  onIncrement: () => void,
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: blue,
    borderWidth: 1,
    borderRadius: 3,
    margin: 10,
  },
  button: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: blue,
  }
})

export default function StepperBase({
  onDecrement,
  onIncrement,
}: Props) {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={onDecrement}>
        <FontAwesome name="minus" size={20} color={blue} />
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.button} onPress={onIncrement}>
        <Entypo name="plus" size={30} color={blue} />
      </TouchableOpacity>
    </View>
  )
}