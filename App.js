import React from 'react'
import type { Element } from 'react'
import { createStore } from 'redux'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import Tabs from './src/screens/Tabs'
import mainReducer from './src/reducers'

const store = createStore(mainReducer)

export default function App(): Element<*> {
  return (
    <Provider store={store}>
      <View style={{ display: 'flex', flex: 1 }}>
        <Tabs />
      </View>
    </Provider>
  )
}
