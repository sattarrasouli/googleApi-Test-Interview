import ItemInList from '../../components/itemInList/itemInList'
import TitleText from '../../components/titleText/titleText'
import { IItemPropsInList } from '../../utils/interfaces'
/**
 * Favorite reading list which added by user and stored locally in localstorage
 * @returns jsx -- a list for books which added to favorite list
 */
function ReadingList(): JSX.Element {

    let favoriteBooks: IItemPropsInList[] | null = JSON.parse(localStorage.getItem("FavoriteBooks") || "")

    return (
        <div className='flex w-full items-center mt-40 flex-col '>
            <TitleText text="Reading List" size="text-xl" color="text-[#fbfbf6]" />
            <div className='bg-white w-1/2 p-3 m-2 max-h-[400px] overflow-y-scroll rounded-sm'>
                {
                    favoriteBooks?.map((item: IItemPropsInList) =>
                        <ItemInList data={item} key={item.id} />
                    )
                }
                {
                    !favoriteBooks && <p className='text-center '>No item Added</p>
                }
            </div>
        </div>
    )
}

export default ReadingList