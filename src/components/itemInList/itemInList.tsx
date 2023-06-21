import { toast } from 'react-toastify'
import readingListIcon from '../../assets/img/reading-list-add.svg'

interface IItemProps {
    volumeInfo: {
        title: string,
        publisher: string,
        authors: string[],
    },
    id: string
}


function AddToReadingList(props: any) {

    let favoriteBooks: string[] | null = JSON.parse(localStorage.getItem("FavoriteBooks") || "null")

    if (!favoriteBooks) {
        favoriteBooks = []
    }
    if (favoriteBooks.some((item: any) => item.id === props.id)) {
        toast.warn("This Book has already added to your reading list.")
        return
    }
    favoriteBooks.push(props)
    localStorage.setItem("FavoriteBooks", JSON.stringify(favoriteBooks))
    toast.success("The Book is added to your list successfully.")
}
function ItemInList({ data }: { data: IItemProps }): JSX.Element {
    return (
        <div className='flex flex-row justify-between border-solid border-[1px] border-[#c7c7c6] hover:border-[#000] p-2 m-1 rounded-md'>
            <div className='8/12'>
                <div className='flex flex-row items-baseline'>
                    <p className='text-xl text-[#243c4b] max-w-[250px] truncate whitespace-nowrap '>{data?.volumeInfo.title}</p>
                    <p className='text-sm text-[#4a5c72] ml-1 truncate max-w-[250px] whitespace-nowrap'>{data?.volumeInfo.publisher && `(${data?.volumeInfo.publisher})`}</p>
                </div>
                <div className='flex flex-row w-full items-baseline'>

                    <p className='text-sm'>
                        {data?.volumeInfo?.authors?.length === 1 ? "Author: " : "Authors: "}
                    </p>
                    <div className='flex wrap max-w-[350px]'>
                        {
                            data?.volumeInfo?.authors?.map((name: string) =>
                                <p key={name} className='text-xs flex-auto truncate whitespace-nowrap rounded mx-1 p-[2px]  text-[#4a5c72] border-solid border-[1px] border-[#c7c7c6]'>{name}</p>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='flex w-1/12'>
                <button onClick={() => AddToReadingList(data)}><img title='add to reading list' className='w-7' src={readingListIcon} /></button>
            </div>
        </div>
    )
}

export default ItemInList