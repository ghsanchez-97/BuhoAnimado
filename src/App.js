// import { Fragment } from 'react'
// Assets
import { BuhoMarchar, BuhoMarcharBack } from 'assets'
import './App.scss'

const App = () => {
  return (
    <div className='spaces'>
      <div className='Start'>
        <i>
          <BuhoMarcharBack />
        </i>
      </div>
      <div className='Back'>
        <i>
          <BuhoMarchar />
        </i>
      </div>
    </div>
  )
}

export default App
