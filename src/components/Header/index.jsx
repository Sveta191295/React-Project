import { Nav } from "react-bootstrap";
import "./styles.css";
import { NavLink } from "react-router-dom";
import logo from "./images/logo2.png"

const Header = () => {
    const classnames = ({ isActive }) => isActive ? "nav_item active" : "nav_item";
    return (
        <header className="header">
            <Nav className="nav-menu">
                <Nav.Item>
                    <NavLink className={classnames} to="/"><img src={logo} className="img" alt=""/></NavLink>
                </Nav.Item>
                <Nav className="nav-right">

                    <Nav.Item>
                        <NavLink className={classnames} to="/">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className={classnames} to="/project">Project</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className={classnames} to="/registration">Register</NavLink>
                    </Nav.Item>
                </Nav>
            </Nav>
        </header>
    );
}
export default Header;

