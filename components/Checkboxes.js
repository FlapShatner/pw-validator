import s from './Checkboxes.module.css'

export default function Checkboxes({ up, isUp, low, isLow, num, isNum, sym, isSym }) {
  return (
    <div className={s.wrapper}>
      <label className={s.up}>
        <input type='checkbox' id='up' name='up' checked={isUp} onChange={() => up(!isUp)} />
        Include Uppercase Letters
      </label>
      <label className={s.low}>
        <input type='checkbox' id='low' name='low' checked={isLow} onChange={() => low(!isLow)} />
        Include Lowercase Letters
      </label>
      <label className={s.num}>
        <input type='checkbox' id='num' name='num' checked={isNum} onChange={() => num(!isNum)} />
        Include Numbers
      </label>
      <label className={s.sym}>
        <input type='checkbox' id='sym' name='sym' checked={isSym} onChange={() => sym(!isSym)} />
        Include Symbols
      </label>
    </div>
  )
}
