import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComonent from './components/FooterComonent'
import HeaderComponent from './components/HeaderComponent'
import ListEEmployeeComponents from './components/ListEmployeeComponents'
import { BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>      
        <Route path='/' element={<ListEEmployeeComponents />}></Route>
        <Route path='/employees'element={<ListEEmployeeComponents />}></Route>
        <Route path='/add-employee'element={<EmployeeComponent />}></Route>
        <Route path='/edit-employee/:id' element={<EmployeeComponent />}></Route>
      </Routes>
      <FooterComonent />
    </BrowserRouter>
    </>
  )
}

export default App
