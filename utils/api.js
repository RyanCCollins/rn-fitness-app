import { AsyncStorage } from 'react-native'
import pick from 'lodash/fp/pick'
import keys from 'lodash/fp/keys'
import filter from 'lodash/fp/filter'
import compose from 'lodash/fp/compose'
import { CALENDER_STORAGE_KEY } from './_calendar'

export function submitEntry({ entry, key }) {
  return AsyncStorage
    .mergeItem(
      CALENDER_STORAGE_KEY,
      JSON.stringify({
        [key]: entry,
      }
    )
  )
}

function filterKey(key, data) {
  const filteredKeys = compose(
    filter(x => x !== key),
    keys
  )(data)
  return pick(filteredKeys)(data)
}

export function removeEntry(key) {
  return AsyncStorage
    .getItem(CALENDER_STORAGE_KEY)
    .then(results => {
      const data = JSON.parse(results)
      return AsyncStorage.setItem(
        CALENDER_STORAGE_KEY,
        filterKey(key, data)
      )
    })
}