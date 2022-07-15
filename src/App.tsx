import { HashRouter, Routes, Route } from 'react-router-dom'

import { BinaryClock } from './routes/binary-clock'
import { Home } from './routes/home'
import './App.css'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/binary-clock' element={<BinaryClock />} />
      </Routes>
    </HashRouter>
  )
}
