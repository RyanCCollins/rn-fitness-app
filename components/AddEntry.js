// @flow

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import { submitEntry, removeEntry } from '../utils/api'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DateHeader'
import SubmitButton from './SubmitButton'
import TextButton from './TextButton'

type Props = {}

type State = {
  run: number,
  bike: number,
  swim: number,
  sleep: number,
  eat: number,
}

class AddEntry extends Component<Props, State> {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }
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
    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons
            name="ios-happy-outline"
            size={100}
          />
          <Text>
            You already logged your information for today
          </Text>
          <TextButton onPress={this.reset}>
            Reset
          </TextButton>
        </View>
      )
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
              {type === 'slider'
                ? <UdaciSlider
                  value={value}
                  onChange={val => this.slide(key, val)}
                  {...rest}
                />
                : <UdaciSteppers
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />}
            </View>
          )
        })}
        <SubmitButton onPress={this.submit} />
      </View>
    )
  }
}

export default AddEntry