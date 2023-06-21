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
        <div>
            <input type="text" onChange={handleSerachQuery} />
        </div>
    )
}

export default SearchInput