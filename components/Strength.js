import s from './Strength.module.css'

export default function Strength({ result }) {
  let comp

  switch (result) {
    case 'none':
      comp = <None />
      break
    case 'tooWeak':
      comp = <TooWeak />
      break
    case 'weak':
      comp = <Weak />
      break
    case 'medium':
      comp = <Medium />
      break
    case 'strong':
      comp = <Strong />
      break
  }

  return (
    <div className={s.box}>
      <p>STRENGTH</p>
      {comp}
    </div>
  )
}

const TooWeak = () => {
  return (
    <div className={`${s.result} ${s.tooWeak}`}>
      <h2>Too Weak!</h2>
      <div className={s.filled} />
      <div className={s.empty} />
      <div className={s.empty} />
      <div className={s.empty} />
    </div>
  )
}

const Weak = () => {
  return (
    <div className={`${s.result} ${s.weak}`}>
      <h2>Weak</h2>
      <div className={s.filled} />
      <div className={s.filled} />
      <div className={s.empty} />
      <div className={s.empty} />
    </div>
  )
}

const Medium = () => {
  return (
    <div className={`${s.result} ${s.medium}`}>
      <h2>Medium</h2>
      <div className={s.filled} />
      <div className={s.filled} />
      <div className={s.filled} />
      <div className={s.empty} />
    </div>
  )
}
const Strong = () => {
  return (
    <div className={`${s.result} ${s.strong}`}>
      <h2>Strong</h2>
      <div className={s.filled} />
      <div className={s.filled} />
      <div className={s.filled} />
      <div className={s.filled} />
    </div>
  )
}

const None = () => {
  return (
    <div className={`${s.result} ${s.none}`}>
      <h2></h2>
      <div className={s.empty} />
      <div className={s.empty} />
      <div className={s.empty} />
      <div className={s.empty} />
    </div>
  )
}
