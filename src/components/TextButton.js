// @flow
import React from 'react'
import type { Element } from 'react'
import { Text, TouchableOpacity } from 'react-native'

type Props = {
  onPress: () => void,
  children: Element<*>,
}

export default function TextButton({
  children,
  onPress,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}