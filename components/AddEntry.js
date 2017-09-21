// @flow

import React, { Component } from 'react'
import { compose, withState } from 'recompose'
import { View, Text } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'

type Props = {

}

type State = {
  run: number,
  bike: number
}

class AddEntry extends Component<Props, State> {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }
  render() {
    return Object.keys(this.state).map(key => getMetricMetaInfo(key).getIcon())
  }
}

export default compose(
  withState('')
)(AddEntry)