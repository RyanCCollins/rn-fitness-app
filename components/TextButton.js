// @flow
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type Props = {
  onPress: () => void,
  children: React$Node,
}

export default function TextButton({
  children,
  onPress,
}: Props): React$Element<*> {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}