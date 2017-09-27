// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import TextButton from './TextButton'

<<<<<<< HEAD:src/components/AlreadyLogged.js
function AlreadyLogged() {
=======
function AlreadyLogged(): React.Element<*> {
>>>>>>> d514072cc1dd6c0a3fc9656ec83d539db9201dc3:components/AlreadyLogged.js
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
