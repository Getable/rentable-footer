import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import RentableFooter from '../index.jsx'
const {TestUtils} = addons
const {isElement} = TestUtils

test('RentableFooter: constructor', (t) => {
  const rentableFooter = React.createElement(RentableFooter)
  t.ok(
    isElement(rentableFooter)
    , 'is a valid react component'
  )

  t.end()
})
