import { Route, Routes } from 'react-router-dom'
import SearchBook from './views/search/SerachBook'
import CustomRouter from './utils/CustomRouter'
import { history } from './store/store'

function App() {

  return (
    <div>
      <CustomRouter history={history}>
        <Routes >
          <Route path='/' element={<SearchBook />} />
        </Routes>
      </CustomRouter>
    </div>
  )
}

export default App
