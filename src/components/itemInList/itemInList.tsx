import { toast } from 'react-toastify'
import readingListIcon from '../../assets/img/reading-list-add.svg'
import ReadingListIcon from '../../assets/img/readingList.svg'
import { Link, useLocation } from 'react-router-dom'
import { IItemInEveryMethod, IItemPropsInList } from '../../utils/interfaces'
import { Location } from 'history'
import { useEffect, useState } from 'react'

/** display item with three specification name, author and publisher
 * a @function to add it to reading list which is store locally @prop the book object
 * when result render for first time check localstorage if it exists the icon changed, to show it's already in the list
 * @returns jsx -- a small card to show three value of books
 */

function ItemInList(props: { data: IItemPropsInList }): JSX.Element {
    const location: Location = useLocation()
    const [favoritedBooks, setFavoritedBooks] = useState<IItemInEveryMethod[] | undefined | null>()

    useEffect(() => {
        var favoriteBooks: IItemInEveryMethod[] | null = JSON.parse(localStorage.getItem("FavoriteBooks") || "null")
        setFavoritedBooks(favoriteBooks)
    }, [props.data])

    function AddToReadingList(props: IItemInEveryMethod) {
        var favoriteBooks: IItemInEveryMethod[] | null = JSON.parse(localStorage.getItem("FavoriteBooks") || "null")
        if (!favoriteBooks) {
            favoriteBooks = []
        }
        function IsAddedToReadingList(item: IItemInEveryMethod) {
            return item.id === props.id
        }
        if (favoriteBooks.some(IsAddedToReadingList)) {
            toast.warn("This Book has already added to your reading list.")
            return
        }
        favoriteBooks.push(props)
        localStorage.setItem("FavoriteBooks", JSON.stringify(favoriteBooks))
        toast.success("The Book is added to your list successfully.")
        setFavoritedBooks(favoriteBooks)
    }

    return (
        <div className='flex flex-row justify-between border-solid border-[1px] border-[#c7c7c6] hover:border-[#000] p-2 m-1 rounded-md'>
            <div className='8/12'>
                <div className='flex flex-row items-baseline'>
                    <p className='text-xl text-[#243c4b] max-w-[250px] truncate whitespace-nowrap '>{props.data?.volumeInfo.title}</p>
                    <p className='text-sm text-[#4a5c72] ml-1 truncate max-w-[250px] whitespace-nowrap'>{props.data?.volumeInfo.publisher && `(${props.data?.volumeInfo.publisher})`}</p>
                </div>
                <div className='flex flex-row w-full items-baseline'>

                    <p className='text-sm'>
                        {props.data?.volumeInfo?.authors?.length === 1 ? "Author: " : "Authors: "}
                    </p>
                    <div className='flex wrap max-w-[350px]'>
                        {
                            props.data?.volumeInfo?.authors?.map((name: string) =>
                                <p key={name} className='text-xs flex-auto truncate whitespace-nowrap rounded mx-1 p-[2px]  text-[#4a5c72] border-solid border-[1px] border-[#c7c7c6]'>{name}</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='flex w-1/12'>
                {
                    location.pathname.includes("/readingList") || favoritedBooks?.some((item: IItemPropsInList) => item.id === props.data.id) ?
                        <Link to="/readingList" className='flex'><img title='remove to reading list' className='w-7' src={ReadingListIcon} /></Link>
                        :
                        <button onClick={() => AddToReadingList(props.data)}><img title='add to reading list' className='w-7' src={readingListIcon} /></button>
                }
            </div>
        </div >
    )
}

export default ItemInList