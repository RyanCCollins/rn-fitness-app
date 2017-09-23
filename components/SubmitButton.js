// @flow

import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
  onPress: () => void
}

function SubmitButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text>Submit</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'stretch',
    justifyContent: 'center',
    height: 100,
    textAlign: 'center',
    fontSize: 28,
  }
})

export default SubmitButton