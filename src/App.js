
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import One from './One'
import { Two } from './Two'

function App() {



  return (
    <>
      <div>
        <ul>
          <li>true: 123 === 123 </li> <br />
          <li>true: 'abc' === 'abc'  </li> <br />
          <li>false: {'object'} === {'object'} </li> <br />
          <li>false: ['array'] === ['array'] </li> <br />
          <li>
            let say function return a string 'abc'
            <br />
            a = function() return 'abc'
            <br />
            b = function() return 'abc'
            <br />
            false: a === b
          </li>
        </ul>
      </div>
      <One />
      <br />
      <br />
      <Two />
    </>
  )
}

export default App
