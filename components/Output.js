import { useRef, useState, useEffect } from 'react'
import s from './Output.module.css'

export default function Output({ newPw }) {
  const [copied, setCopied] = useState(false)
  const pwRef = useRef()
  const timerRef = useRef(null)

  const copyPw = () => {
    navigator.clipboard.writeText(pwRef.current.value)
    setCopied(true)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div className={s.output}>
      <input ref={pwRef} value={newPw} readOnly placeholder='P4$5w0rD!' />
      <button onClick={copyPw} className={s.btn}>
        {copied && <p>COPIED</p>}
        <img className={s.copy} src='/icon-copy.svg' alt='copy' />
      </button>
    </div>
  )
}
