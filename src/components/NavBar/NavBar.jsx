import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service';
import './NavBar.css'

const NavBar = ({ user, setUser }) => {
	const handleLogOut = () => {
		userService.logOut();
		setUser(null);
	}
	return (
		<nav>
			<span className="align-lt">TT &nbsp; | &nbsp; Welcome, {user.name}</span>
			<Link to="/tack" className="link">Your tack</Link>
			&nbsp; | &nbsp;
			<Link to="/schedule" className="link">Schedule</Link>
			&nbsp; | &nbsp;
			<Link to="/services-types" className="link">Services</Link>
			<Link to="" className="link align-rt" onClick={handleLogOut}>Log Out</Link>
		</nav>
	)
}
export default NavBar