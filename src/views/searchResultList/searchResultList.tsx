import ItemInList from '../../components/itemInList/itemInList'
import { useAppSelector } from '../../store/hook'
import { IItemPropsInList } from '../../utils/interfaces'
/**
 * search result recieve from store and dispaly it. 
 * we take the first five of the book which has been recieved from backend. (in real project its better to be handled in backend for better performance.)
 * @returns jsx -- a list of five books 
 */
function SearchResultList(): JSX.Element {
    const { data, isLoading } = useAppSelector((state) => state.SearchReducer)
    const FiveItems: IItemPropsInList[] | null = data?.items?.slice(0, 5)
    return (
        < div className={`w-1/2 ${data?.length === 0 && "hidden"} bg-white mt-1 p-2 rounded-sm`} >
            {
                FiveItems?.map((item: IItemPropsInList) =>
                    <ItemInList data={item} key={item.id} />
                )
            }
            {
                isLoading && <p>Loading...</p>
            }
        </div >
    )
}

export default SearchResultList