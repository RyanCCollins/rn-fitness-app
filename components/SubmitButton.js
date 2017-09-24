// @flow

import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { red, white } from '../utils/colors'

type Props = {
  onPress: () => void
}

function SubmitButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    margin: 20,
    padding: 20,
    backgroundColor: red
  },
  text: {
    color: white,
    fontSize: 20,
  }
})

export default SubmitButton