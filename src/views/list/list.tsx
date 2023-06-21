import ItemInList from '../../components/itemInList/itemInList'
import { useAppSelector } from '../../store/hook'

function List() {
    const { data, isLoading, Error } = useAppSelector((state: any) => state.SearchReducer)
    console.log('data.length', data.length)
    console.log('data', data)
    return (
        < div className={`w-1/2 ${data?.length !== 0 && "bg-white"} mt-1 p-2 rounded-sm`} >
            {
                data?.items?.slice(0, 5)?.map((item: any) =>
                    <ItemInList data={item} />
                )
            }
            {
                isLoading && <p>Loading...</p>
            }
        </div >
    )
}

export default List