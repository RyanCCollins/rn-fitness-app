import React from 'react'
import type { Element } from 'react'
import { View } from 'react-native'
import { AddEntry } from './src/screens'

export default function App(): Element<*> {
  return (
    <View style={{ display: 'flex' }}>
      <AddEntry />
    </View>
  )
}
