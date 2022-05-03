import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm"

const AuthPage = ({ setUser }) => {
	const [ currentForm, setCurrentForm ] = useState('login');
	const handleClick = () => {
		if (currentForm === 'login') {
			setCurrentForm('signup')
		} else {
			setCurrentForm('login')
		}
	};
	return (
		<main>
			<h1>AuthPage</h1>
			<h3 onClick={handleClick}>
				{
					currentForm === 'login'
					? <button>Sign Up</button>
					:
					<button>Log in</button>
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

export default AuthPage