// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import TextButton from './TextButton'

function AlreadyLogged() {
  return (
    <View>
      <Ionicons
        name="ios-happy-outline"
        size={100}
      />
      <Text>
        You already logged your information for today
      </Text>
      <TextButton onPress={this.reset}>
        Reset
      </TextButton>
    </View>
  )
}

export default AlreadyLogged
