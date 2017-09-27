import React from 'react'
import { Text } from 'react-native'

type Props = {
  date: string,
}

export default function DateHeader({ date }: Props) {
  return <Text>{date}</Text>
}
