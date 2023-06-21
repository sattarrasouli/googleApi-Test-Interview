import SearchInput from '../../components/searchInput/searchInput'
import TitleText from '../../components/titleText/titleText'
import List from '../list/list'

function SearchBook() {




    return (
        <div className='flex items-center w-full mt-60 flex-col'>
            <TitleText text="Search Books" size="text-xl" color="text-[#fbfbf6]" />
            <SearchInput />
            <List />
        </div>
    )
}

export default SearchBook

