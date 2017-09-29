import React from 'react'
import type { Element } from 'react'
import { createStore } from 'redux'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import Tabs from './src/screens/Tabs'
import mainReducer from './src/reducers'

export default function App(): Element<*> {
  return (
    <Provider store={createStore(mainReducer)}>
      <View style={{ display: 'flex', flex: 1 }}>
        <Tabs />
      </View>
    </Provider>
  )
}
