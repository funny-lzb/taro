import Head from './components/Head'
import MyMenu from './components/MyMenu'
import Index from './pages/Index'
import Bottom from './components/Bottom'
import { Routes, Route } from 'react-router-dom'
import './css/app.css'

export default function App() {
  return (
    <>
      <div className='navbar'>
        <Head />
        <MyMenu />
      </div>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
      <Bottom />
    </>
  )
}
