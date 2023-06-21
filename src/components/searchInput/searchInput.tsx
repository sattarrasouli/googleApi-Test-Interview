import { useEffect, useState } from 'react'
import { SearchBookRequest } from '../../store/action'
import { useAppDispatch } from '../../store/hook'

function SearchInput(): JSX.Element {

    const [searchQuery, setSearchQuery] = useState<string>('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (searchQuery) {
            setTimeout(() => {
                dispatch(SearchBookRequest(searchQuery))
            }, 500)
        }
    }, [searchQuery])

    const handleSerachQuery = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)

    return (
        <div className='w-1/2'>
            <input className='rounded-sm p-2 w-full h-10 outline-0' type="text" onChange={handleSerachQuery} />
        </div>
    )
}

export default SearchInput