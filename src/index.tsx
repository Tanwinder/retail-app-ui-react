// import 'core-js/features/array/flat-map'
// import 'core-js/features/map'
// import 'core-js/features/promise'
// import 'core-js/features/set'
// import 'raf/polyfill'
// import 'whatwg-fetch'
// pollyfills  for the old browsers

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<React.StrictMode><App />
  </React.StrictMode>)