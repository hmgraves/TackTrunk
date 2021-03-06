import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import './AuthPage.css';

const AuthPage = ({ setUser }) => {
	const [ currentForm, setCurrentForm ] = useState('login');
	const handleClick = () => {
		if (currentForm === 'login') {
			setCurrentForm('signup')
		} else {
			setCurrentForm('login')
		};
	};
	return (
		<main className="auth-background">
			<h1>TackTrunk!</h1>
			<p>Welcome to TackTrunk! Please login or signup below.</p>
			<h3 onClick={handleClick}>
				{
					currentForm === 'login'
					? <button className="auth-btn">Sign Up</button>
					:
					<button className="auth-btn">Log in</button>
				}
			</h3>
			{
				currentForm === 'login'
				? <LoginForm setUser={setUser}/>
				:
				<SignUpForm setUser={setUser}/>
			}
		</main>
	);
};

export default AuthPage;