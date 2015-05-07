import React from 'react'
import RentableFooter from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

React.render(<RentableFooter {...data} />, document.getElementById('app'))
