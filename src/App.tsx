import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/layout'
import { history } from './store/store'
import CustomRouter from './utils/CustomRouter'
import ReadingList from './views/readingList/readingList'
import SearchBook from './views/search/SearchBook'

function App() {

  return (
    <div>
      <CustomRouter history={history}>
        <Layout>
          <Routes >
            <Route path='/' element={<SearchBook />} />
            <Route path='/readingList' element={<ReadingList />} />
          </Routes>
        </Layout>
      </CustomRouter>
    </div>
  )
}

export default App
