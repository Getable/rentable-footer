import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import RentableFooter from './index.jsx'
const {TestUtils} = addons
const {Simulate, renderIntoDocument, isElement, createRenderer} = TestUtils
const getReactNode = (dom, node) => TestUtils.findRenderedDOMComponentWithTag(dom, node)
const getDOMNode = (dom, node) => getReactNode(dom, node).getDOMNode()
const getDOMNodes = (dom, type) => TestUtils.scryRenderedDOMComponentsWithTag(dom, type)
const getDOMNodeText = (dom, node) => getDOMNode(dom, node).textContent

test('RentableFooter: constructor', (t) => {
  const rentableFooter = React.createElement(RentableFooter)
  t.ok(
    isElement(rentableFooter)
    , 'is a valid react component'
  )

  t.end()
})

// TODO: delete me. I'm just an example!
test('RentableFooter rendered DOM', (t) => {
  const name = 'Bert'
  const rentableFooter = React.createElement(RentableFooter, {name})
  const dom = renderIntoDocument(rentableFooter)

  t.equal(
    getDOMNodeText(dom, 'h1')
    , name
    , 'renders the `name` prop'
  )

  t.end()
})
