import React, {Component} from 'react'
import {addons} from 'react/addons'
const {shouldComponentUpdate} = addons.PureRenderMixin
const namespace = 'rentableFooter'

export default class RentableFooter extends Component {
  // use the pure-render mixin without the mixin. This allows us to use es6
  // classes and avoid "magic" code
  shouldComponentUpdate (...args) {
    return shouldComponentUpdate.apply(this, args)
  }

  render () {
    return (
      <footer className={namespace}>
        <a href="/about">About Us</a>
        <p>&copy; Getable Inc. 2015</p>
      </footer>
    )
  }
}
