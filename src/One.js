import { useState, useCallback, useEffect, useRef } from 'react'

const One = () => {

  const [num1, setNum1] = useState(2)
  const [num2, setNum2] = useState(4)
  const [input, setInput] = useState('')
  const [result, setResult] = useState(0)

  const first = useRef(0)

  const sum = () => num1 + num2

  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const handleNum1 = (e) => {
    setNum1(Number(e.target.value))
  }
  const handleNum2 = (e) => {
    setNum2(Number(e.target.value))
  }

  useEffect(() => {
    console.log('redner')
    setResult(sum())
    first.current++
  }, [sum])

  return (
    <div className="App">
      <p>
        Example One:
        <br />
        <br />
        const [num1, setNum1] = useState(2)
        <br />
        const [num2, setNum2] = useState(4)
        <br />
        <br />
          Giving a function called Sum: const sum = () => num1 + num2
      </p>
      <input
        type='text'
        value={input}
        onChange={handleChange}
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
      {result}
      <br />
      <br />
      <p>
        due to every render will create a new refernce of the sum function, this useEffect hook will render:
        <br />
        useEffect((),[sum])
      </p>
      <br />
      number of sum function rendring:
      <br />
      {first.current}
    </div>
  )
}

export default One