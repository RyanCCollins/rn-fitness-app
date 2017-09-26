import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'

export default function App() {
  return (
    <View style={{ display: 'flex' }}>
      <AddEntry />
    </View>
  )
}

