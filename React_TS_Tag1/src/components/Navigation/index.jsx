/**
 * 
 * Navigation bauen mit dynamic rendering
 * Nav dann im Header integrieren
 * optional: NavLink verwenden
 * 
 */

import { navData } from "../../store/navigation";
import NavItem from "./components/NavItem";

const Navigation = () => {

    const NavItemList = navData.map((item) => {
        return <NavItem key={item.id} {...item} />
    })

    return <nav>
        <div>
            {NavItemList}
        </div>
    </nav>
}

export default Navigation