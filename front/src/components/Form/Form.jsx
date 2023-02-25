import { useState } from "react";
import s from './Form.module.css';
import validation from "./validation";


export default function Form(props){

    const login = props.login
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [errors,setErrors] = useState({
        username: '',
        password: ''
    });
    
    const handleInputChange = (e) =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });

        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value
            })
        )
    }

    const handleSubmit = () => {
        login(userData);
    }

    return(
        <div className={s.formContainer}>
            <h1 className={s.Header}>The rick and morty App</h1>
            <div className={s.Inputs}>
                <label htmlFor="username">Username: </label>
                <input 
                    id="username"
                    name="username"
                    value={userData.username}
                    onChange = {handleInputChange} 
                    type="text" 
                    className={errors.username && s.Warning}/>
                <p className={s.danger}>{errors.username}</p>
            </div>
            <br />
           <div className={s.Inputs}>
                <label htmlFor="password">Password:  </label>
                <input 
                    id="password"
                    name="password"
                    value={userData.password} 
                    onChange =  {handleInputChange}
                    type="password" 
                    className={errors.password && s.Warning}/>
                <p className={s.danger}>{errors.password}</p>
           </div>
            <br />
            <button onClick={handleSubmit}>LOGIN</button>
        </div>
    )
}