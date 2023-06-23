import { useEffect, useState } from 'react'
import { SearchBookRequest } from '../../store/action'
import { useAppDispatch } from '../../store/hook'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'

/**
 * serach input section, dispatch action to request queries user typed in, every 500 ms (debouncing)
 * @returns jsx -- input element for searching books
 */

function SearchInput(): JSX.Element {

    const [searchQuery, setSearchQuery] = useState<string>('')
    const dispatch: Dispatch<AnyAction> = useAppDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(SearchBookRequest(searchQuery))
        }, 500)

    }, [searchQuery])

    const handleSerachQuery = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)

    return (
        <div className='w-1/2'>
            <input className='rounded-sm p-2 w-full h-10 outline-0' placeholder="Search book's name, author..." type="text" onChange={handleSerachQuery} />
        </div>
    )
}

export default SearchInput