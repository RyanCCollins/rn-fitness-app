import styled from 'styled-components/native'
import { purple } from '../../utils/colors'

export default styled.TouchableOpacity`
  margin: 5px;
  background-color: ${purple};
  padding: 10px;
  border-radius: 2px;
  border-top-${props => props.direction}-radius: 0px;
  border-bottom-${props => props.direction}-radius: 0px;
`
