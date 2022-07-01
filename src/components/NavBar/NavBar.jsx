import { Link } from "react-router-dom"
import * as userService from '../../utilities/users-service';
import './NavBar.css'

const NavBar = ({ user, setUser }) => {

	// function to handle user logging out
	const handleLogOut = () => {
		userService.logOut();
		setUser(null);
	}
	return (
		<nav>
			<span className="align-lt">
				<Link to="/" className="link">TT</Link>
				&nbsp; | &nbsp;
				<Link to="/tack" className="link">Your tack</Link>
				&nbsp; | &nbsp;
				<Link to="/schedule" className="link">Schedule</Link>
				&nbsp; | &nbsp;
				<Link to="/services-types" className="link">Services</Link>
				&nbsp; | &nbsp;
				<Link to="/my-schedule" className="link">My Schedule</Link>
			
			</span>

			<span className="align-rt">
				Welcome, {user.name} &nbsp; | &nbsp;
				<Link to="" className="link" onClick={handleLogOut}>Log Out</Link>
			</span>
		
		</nav>
	)
}
export default NavBar