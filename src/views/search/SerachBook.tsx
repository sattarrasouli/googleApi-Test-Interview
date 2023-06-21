import SearchInput from '../../components/searchInput/searchInput'
import { useAppSelector } from '../../store/hook'

function SearchBook() {

    const { data, isLoading, Error } = useAppSelector((state: any) => state.SearchReducer)



    return (
        <div className='flex justify-center '>
            <SearchInput />
            {data?.items?.map((item: any) =>
                <div key={item.id}>
                    <p>{item.volumeInfo.title}</p>
                </div>
            )}
            {
                isLoading && <p>loading...</p>
            }
        </div>
    )
}

export default SearchBook