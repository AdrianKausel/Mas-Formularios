import React, {useState} from "react";
import Swal from 'sweetalert2'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2]= useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, password2};
        console.log(newUser)
        props.setUser(newUser)
        passLengthVerification();
        setHasBeenSubmitted( true );
        nameAlert();
        nameAlert2();
        emailAlert();
        passAlert(true);
        validator();
    }
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form";
	}   else return "Welcome, please submit the form";
    };

    const passVerification = () =>{
        if (password != password2){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords dont match!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        else console.log("OK")
    }
    const passLengthVerification = () =>{
        if (password.length<4){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please insert password',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        else console.log("OK")
    }
    const lengthVerification = () => {
        if (password.length >= 4){
            
        }
        else return "Password must be at least 4 characters long"
    }
    const nameLengthVerification = () => {
        if (firstName.length >= 2){
            
        }
        else return "Name must be at least 2 characters long"

    }
    const nameLengthVerification2 = () => {
        if (lastName.length >= 2){
            
        }
        else return "Last Name must be at least 2 characters long"

    }
    const emailVerification = () => {
        if (email.includes("@")){

        }
        else return "Insert valid email"
    }
    const nameAlert = () => {
        if (firstName.length <2){
            Swal.fire({
                icon: 'warning',
                title: 'Please insert name',
                text: 'Name must be at least 2 characters long',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }
    const passAlert = () => {
        if (password != password2){
            Swal.fire({
                icon: 'warning',
                title: 'Password',
                text: 'asdasda',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }
    const nameAlert2 = () => {
        if (lastName.length <2){
            Swal.fire({
                icon: 'warning',
                title: 'Please insert Last Name',
                text: 'Last Name must be at least 2 characters long',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }
    const emailAlert = () => {
        if (email.length <2){
            Swal.fire({
                icon: 'warning',
                title: 'Plase insert a valid Email',
                text: 'Email must be valid',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }
    const validator = () => {
        if (nameLengthVerification(),nameLengthVerification2(), emailVerification()){
            Swal.fire({
                icon: 'error',
                title: 'Missing Information',
                text: 'Complete the fields',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        else Swal.fire({
            icon: 'success',
            title: 'Form Complete',
            text: 'Thank you for applying!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    
    return(
        <form  onSubmit={createUser}>
            <div className="casilla1" >
                <label>First Name:</label> 
                <input type="text" value={firstName} name="nombre" onChange={ (e) => setFirstName(e.target.value)} />
            </div>
                <style className="casilla3">{nameLengthVerification()}</style>
            <div className="casilla1">
                <label> Last Name: </label>    
                <input type="text" value={lastName} onChange={ (e) => setLastname(e.target.value)} />
            </div>
                <style className="casilla3">{nameLengthVerification2()}</style>
            <div className="casilla1">
                <label> Email: </label>    
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value)} />
            </div>
                <style className="casilla3">{emailVerification()}</style>
            <div className="casilla1">
                <label> Password: </label>    
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value)} />
            </div>  
            <div> 
                <style className="casilla3">{lengthVerification()}</style>
            </div>
            <div className="casilla1">
                <label > Re enter password: </label>    
                <input type="password"  value={password2} onChange={ (e) => setPassword2(e.target.value)} />
                
            </div>  
            <button className="casilla2" type="submit" > Create User</button>
            <h3> {formMessage()}, {firstName} !</h3>  
        </form>

        
    )
}

export default UserForm;

    
    
