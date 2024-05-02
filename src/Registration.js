import './style.css';
import Header from './Header';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import userDetails from './UserDetails.json';
import {React, useState, useEffect} from 'react';

export default function Registration(){
    const { register,control, handleSubmit, setError,setValue, formState: { errors } } = useForm();
    const history = useHistory();
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    useEffect(() => {
        // Set the default value for usertype when the component mounts
        setValue('usertype', 'customer');

        setValue('usertype', 'customer');
  }, [setValue]);

    const handleRegistration = (data) => {
        if (data.password !== data.repassword) {
            setError('repassword', { type: 'manual', message: "Passwords don't match" });
          } else {
            // You can send the form data to your server for registration and data storage here
            console.log('Form submitted', data);
            const userExists = userDetails.users.some(user => user.username === data.username);
            if (userExists) {
                setError('username', { type: 'manual', message: "Username already exists" });
            } else{
                userDetails.users.push({
                    username: data.username,
                    password: data.password,
                    usertype: data.usertype
                  });
                  // Set registration success to true
                    setRegistrationSuccess(true);
                // Redirect to login or account page
                history.push('/login?success=true'); // Change '/Login' to the appropriate route
            }
      
          }
      }
      const handleError = (errors) => {};

    const registerOptions = {
        username : {required : "Username cannot be blank"},
        password : { required : "Password cannot be blank" },
        repassword : {required : "Password cannot be blank"},
    };  
    return(
        <>
             <div className="Container">
                <Header />
                <div className='post' style={{float: "none", width: "100%"}}>
                <h2 className='title meta'><a style={{fontSize: "24px"}}>Registration</a></h2>
                <div className='entry'>
                <div style={{width:"400px", margin:"25px", marginLeft: "auto",marginRight: "auto"}}>
                <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                    <table style={{width:'100%'}}><tr><td>
                    <h3>Username</h3></td><td><Controller
                    name='username'
                    control={control}
                    render={({ field }) => (
                        <>
                        <input type='text' name='username' className='input' {...register("username",registerOptions.username)} {...field} ></input>
                    <small style={{color:"red"}}>{errors?.username && errors.username.message}</small>
                    </>
                    )} />
                    
                    </td></tr><tr><td>
                    <h3>Password</h3></td><td><Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                    <>
                    <input type='password' name='password' className='input' {...register("password",registerOptions.password)} {...field}></input>
                    <small style={{color:"red"}}>{errors?.password && errors.password.message}</small>
                    </>
                    )}
                  />
                    </td></tr><tr><td>
                    <h3>Re-Password</h3></td><td><Controller
                    name='repassword'
                    control={control}
                    render={({ field }) => (
                    <>
                    <input type='password' name='repassword' className='input' {...register("repassword",registerOptions.repassword)} {...field}></input>
                    <small style={{color:"red"}}>{errors?.repassword     && errors.repassword.message}</small>
                    </>
                    )}
                    />
                    </td></tr><tr><td>
                    <h3>User Type</h3></td><td><Controller
                        name="usertype"
                        control={control}
                        render={({ field }) => (<select name='usertype' className='input' {...field}><option value='customer'>Customer</option><option value='storeManager'>Store Manager</option><option value='salesManager'>salesManager</option></select>
                        )}
                        />
                        </td></tr></table>
                    <input type='submit' className='btnbuy' name='ByUser' value='Create User' style={{float: "right",height: "20px", margin: "20px", marginRight: "10px"}}></input>
                </form>
                
                </div></div></div>
            </div>
        </>
    );
}