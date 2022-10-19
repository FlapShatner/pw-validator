import Head from 'next/head'
import { useState } from 'react'
import Output from '../components/Output'
import Checkboxes from '../components/Checkboxes'
import Strength from '../components/Strength'
import s from '../styles/Main.module.css'
import { genPassword, getStrength } from '../helpers/generate'

export default function Home() {
  const [sliderVal, setSliderVal] = useState(10)
  const [newPw, setNewPw] = useState('')
  const handleSlider = (e) => {
    setSliderVal(e.target.value)
    setResult(getStrength(sliderVal, isUp, isLow, isNum, isSym))
  }
  const [result, setResult] = useState('none')

  const [isUp, setIsUp] = useState(true)
  const [isLow, setIsLow] = useState(true)
  const [isNum, setIsNum] = useState(true)
  const [isSym, setIsSym] = useState(true)

  const up = () => {
    setIsUp(!isUp)
  }

  const low = () => {
    setIsLow(!isLow)
  }

  const num = () => {
    setIsNum(!isNum)
  }
  const sym = () => {
    setIsSym(!isSym)
  }

  const handleSubmit = () => {
    setNewPw(genPassword(sliderVal, isUp, isLow, isNum, isSym))
    setResult(getStrength(sliderVal, isUp, isLow, isNum, isSym))
  }

  return (
    <>
      <Head>
        <title>Password Generator</title>
      </Head>
      <div className={s.background}>
        <div className={s.wrapper}>
          <p className={s.title}>Password Generator</p>
          <Output newPw={newPw} />
          <form className={s.form}>
            <div className={s.sliderWrap}>
              <div className={s.labelWrap}>
                <label htmlFor='chars'>Character Length</label>
                <i>{sliderVal}</i>
              </div>
              <input
                className={s.slider}
                onChange={handleSlider}
                type='range'
                name='chars'
                id='chars'
                min='8'
                max='16'
                step='1'
                value={sliderVal}
              />
            </div>
            <Checkboxes isLow={isLow} isUp={isUp} isNum={isNum} isSym={isSym} up={up} low={low} num={num} sym={sym} />
            <Strength result={result} />
            <div onClick={handleSubmit} className={s.button}>
              Generate
              <img src='/icon-arrow-right.svg' alt='' />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
