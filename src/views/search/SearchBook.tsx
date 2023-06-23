import SearchInput from '../../components/searchInput/searchInput'
import TitleText from '../../components/titleText/titleText'
import SearchResultList from '../searchResultList/searchResultList'
/**
 * search book view, including three different components, 
 * @returns jsx -- search section
 */
function SearchBook(): JSX.Element {

    return (
        <div className='flex items-center w-full mt-52 flex-col'>
            <TitleText text="Search Books" size="text-xl" color="text-[#fbfbf6]" />
            <SearchInput />
            <SearchResultList />
        </div>
    )
}

export default SearchBook

