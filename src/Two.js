
import { useState, useCallback, useEffect, useRef } from 'react'

export const Two = () => {

  const [num1, setNum1] = useState(2)
  const [num2, setNum2] = useState(4)
  const [input2, setInput2] = useState('')
  const [result2, setResult2] = useState(0)
  const second = useRef(0)
  const sum2 = useCallback(() => num1 + num2, [num1, num2])
  useEffect(() => {
    console.log('redner')
    setResult2(sum2())
    second.current++
  }, [sum2])
  const handleChange2 = (e) => {
    setInput2(e.target.value)
  }

  const handleNum1 = (e) => {
    setNum1(Number(e.target.value))
  }
  const handleNum2 = (e) => {
    setNum2(Number(e.target.value))
  }

  return (
    <div className="App">
      <p>
        Example Two:
        <br />
        <br />
        const [num1, setNum1] = useState(2)
        <br />
        const [num2, setNum2] = useState(4)
        <br />
        <br />
      Giving a function called Sum:  const sum2 = useCallback(() => num1 + num2, [num1, num2])
      </p>
      <input
        type='text'
        value={input2}
        onChange={handleChange2}
        placeholder='Any Text'
      />
      <br />
      <br />
      <input
        style={{ width: 50 }}
        type='number'
        value={num1}
        onChange={handleNum1}
        placeholder='Any Text'
      />
      +
      <input
        style={{ width: 50 }}
        type='number'
        value={num2}
        onChange={handleNum2}
        placeholder='Any Text'
      />
      =
      {result2}
      <br />
      <br />
      <p>
        Updating only state changes from a memoized callback: in this case are num1 and num2
      </p>
      <br />
      number of sum function rendring:
      <br />
      {second.current}
      <br />
      <br />
    </div>
  )
}
