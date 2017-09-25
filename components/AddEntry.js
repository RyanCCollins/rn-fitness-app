// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import { submitEntry, removeEntry } from '../utils/api'
import DateHeader from './DateHeader'
import SubmitButton from './SubmitButton'
import UIControl from './UIControl'
import AlreadyLogged from './AlreadyLogged'

type Props = {
  alreadyLogged: boolean,
}

type State = {
  run: number,
  bike: number,
  swim: number,
  sleep: number,
  eat: number,
}

class AddEntry extends Component<Props, State> {
  static defaultProps = {
    alreadyLogged: false,
  }

  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }

  props: Props

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric]: count > max ? max : count,
      }
    })
  }

  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        [metric]: count < 0 ? 0 : count,
      }
    })
  }

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }))
  }

  submit = () => {
    const key = timeToString()

    this.setState({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0,
    })

    submitEntry({ key, entry: this.state })
  }

  reset = () => {
    const key = timeToString()
    removeEntry(key)
  }

  render() {
    const { alreadyLogged } = this.props
    if (alreadyLogged) {
      return <AlreadyLogged />
    }

    const metaInfo = getMetricMetaInfo()
    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              <UIControl
                key={key}
                value={value}
                onChange={val => this.slide(key, val)}
                onIncrement={() => this.increment(key)}
                onDecrement={() => this.decrement(key)}
                type={type}
                {...rest}
              />
            </View>
          )
        })}
        <SubmitButton onPress={this.submit} />
      </View>
    )
  }
}

export default AddEntry