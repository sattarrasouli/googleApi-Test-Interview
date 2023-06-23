import { Link, useLocation } from 'react-router-dom'
import ReadingList from '../../assets/img/readingList-icon.svg'
import Search from '../../assets/img/search.svg'
import { Location } from 'history'

/**
 *  Here i check the location, base on the location i change the icon, route and title in the header
 * @returns jsx -- a Link element including img(icon)
 */
function Header(): JSX.Element {

    const location: Location = useLocation()
    let isInReadingList: boolean = location.pathname.includes("/readingList")

    return (
        <div className='w-full flex justify-end'>
            <Link to={isInReadingList ? '/' : "/readingList"}>
                <img className='w-8 mr-3 mt-2' title={isInReadingList ? "Search" : "Reading List"} src={isInReadingList ? Search : ReadingList} />
            </Link>
        </div>
    )
}

export default Header;