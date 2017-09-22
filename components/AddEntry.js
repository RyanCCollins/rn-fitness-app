// @flow

import React, { Component } from 'react'
import { compose, withState } from 'recompose'
import Stepper from 'react-native-simple-stepper';
import { View, Text, Slider, StyleSheet } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'

type Props = {

}

type State = {
  run: number,
  bike: number
}

const Item = ({ type, max, ...rest }) => {
  switch(type) {
    case 'slider':
      return <Slider style={{ width: 100 }} maximumValue={max} {...rest} />
    case 'steppers':
      return <Stepper style={{ width: 100 }} maximumValue={max} {...rest} />
  }
};

const Row = (props) => (
  <View style={{ height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <Text>
      {props.displayName}
    </Text>
    <Item {...props} />
  </View>
)

class AddEntry extends Component<Props, State> {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0,
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.table}>
          {Object.keys(this.state).map(key =>
            {
              const data = getMetricMetaInfo(key);
              return (
                <Row
                  key={key}
                  value={this.state[key]}
                  max={data.max}
                  displayName={data.displayName}
                  step={data.step}
                  type={data.type}
                />
              )
            }
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  table: {
    width: '100%',
    height: '50%',
    display: 'flex',
  }
})

export default compose(
  withState('')
)(AddEntry)