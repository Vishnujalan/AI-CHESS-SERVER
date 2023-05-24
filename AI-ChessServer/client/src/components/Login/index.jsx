import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import image from "./chesswp.jpg"
import image1 from "./che.gif"




const Login = () => {
	
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	// ren_html=function(){
	// 	var body=document.getElementById("chess1")
	// 	body.innerHTML=chess
	// }

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// const url = "mongodb://localhost:27017/login.users";
			// const { data: res } = await axios.post(url, data);
			// localStorage.setItem("token", res.data);
			// window.location = "/";
			window.open("http://127.0.0.1:3001/chess/index.html","_self");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};



	return (
				
		<div className={styles.login_container } style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize: '100%' , 
		
		}}>
			<div className={styles.login_form_container} >
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1 style={{color: "white"}}>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
					  
								<button type="submit" className={styles.green_btn} >
									SIGN IN
								</button>
						
						
					</form>
				</div>
				<div className={styles.right} style={{ backgroundImage:`url(${image1})`,backgroundRepeat:"no-repeat",backgroundSize: '100%', borderRadius:'15500px'
		
	}}>
					<h1></h1>
					<Link to="/signup">
						<button type="button" className={styles.green_btn} style={{position:'relative', top:'147px'}}>
							SIGN UP
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;


