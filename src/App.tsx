import { Route, Routes } from 'react-router-dom'
import SearchBook from './views/search/SerachBook'
import CustomRouter from './utils/CustomRouter'
import { history } from './store/store'
import Mainpage from './views/mainpage/mainpage'

function App() {

  return (
    <div>
      <CustomRouter history={history}>
        <Routes >
          <Route path='/' element={<Mainpage />} />
          <Route path='/readingList' element={<Mainpage />} />
        </Routes>
      </CustomRouter>
    </div>
  )
}

export default App
