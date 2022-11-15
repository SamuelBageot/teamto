import { Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '50px',
            border: '1px solid black'
            }}>
            <Heading>STAR WARS</Heading>
            <nav>
                <ul>
                    <li><NavLink to='/'>HOME</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;