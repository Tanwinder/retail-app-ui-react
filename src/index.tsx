import 'core-js/features/array/flat-map'
import 'core-js/features/map'
import 'core-js/features/promise'
import 'core-js/features/set'
import 'raf/polyfill'
import 'whatwg-fetch'
// till here for the old browsers

import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<h1>Hello React!</h1>)