// @flow

import { AsyncStorage } from 'react-native'
import pick from 'lodash/fp/pick'
import keys from 'lodash/fp/keys'
import filter from 'lodash/fp/filter'
import compose from 'lodash/fp/compose'
import { CALENDER_STORAGE_KEY } from './_calendar'

export type EntryKeys = $Keys<Entry>
export type Entry = {
  run: number,
  bike: number,
  swim: number,
  sleep: number,
  eat: number,
}

type Key = string
type SubmitEntryArgs = {
  entry: Entry,
  key: Key,
}

export function submitEntry({ entry, key }: SubmitEntryArgs): Promise<Entry> {
  return AsyncStorage
    .mergeItem(
      CALENDER_STORAGE_KEY,
      JSON.stringify({
        [key]: entry,
      }),
    )
}

function filterKey(key: Key, data: Entry) {
  const filteredKeys = compose(
    filter(x => x !== key),
    keys,
  )(data)
  return pick(filteredKeys)(data)
}

export function removeEntry(key: Key): Promise<Entry> {
  return AsyncStorage
    .getItem(CALENDER_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      return AsyncStorage.setItem(
        CALENDER_STORAGE_KEY,
        filterKey(key, data),
      )
    })
}