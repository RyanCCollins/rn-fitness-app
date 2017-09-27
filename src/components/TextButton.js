// @flow
import React from 'react'
import type { Element } from 'react'
import { Text, TouchableOpacity } from 'react-native'

type Props = {
  onPress: () => void,
<<<<<<< HEAD:src/components/TextButton.js
  children: Element<*>,
=======
  children: React.Node,
>>>>>>> d514072cc1dd6c0a3fc9656ec83d539db9201dc3:components/TextButton.js
}

export default function TextButton({
  children,
  onPress,
<<<<<<< HEAD:src/components/TextButton.js
}: Props) {
=======
}: Props): React.Element<*> {
>>>>>>> d514072cc1dd6c0a3fc9656ec83d539db9201dc3:components/TextButton.js
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}