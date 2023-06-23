import { IChildren } from "../../utils/interfaces"
import Header from "../header/header"

/**
 * for having header and footer above every page i've made layout to wrap other views
 * @param param0 children react element
 * @returns jsx 
 */
function Layout({ children }: IChildren): JSX.Element {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout

