import { Link } from 'react-router-dom'
import ReadingList from '../../assets/img/readingList-icon.svg'
import SearchBook from '../search/SerachBook'
function Mainpage() {
    return (
        <>
            <div className='w-full flex justify-end'>
                <Link to="/"> <img className='w-8 mr-3 mt-2' title="Reading List" src={ReadingList} /></Link>
            </div>
            <SearchBook />
        </>
    )
}

export default Mainpage