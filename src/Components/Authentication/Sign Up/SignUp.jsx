import { useState } from 'react';
import './style.css'; 
import { FaGithub, FaGoogle  } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../../../firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null)

  // form
  const handleSignupClick = () => {
    setIsLoginFormVisible(false);
  };

  const handleLoginClick = () => {
    setIsLoginFormVisible(true);
  };

  // Google login
  const handleGoogleSignIn = ()  =>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then(result => {
        console.log(result.user)
        toast.success('successfully logged in')
        // toast.success("successfully logged in ")
        setTimeout(function () {
            window.location.href = "/";
        }, 1000);
    })
    .catch(error => setErrorMessage(error.message))
  }
    
  // handle Github login
  const handleGithubSignIn = ()  =>{
    const provider = new GithubAuthProvider()
    signInWithPopup(auth, provider)
    .then(result => {
        console.log(result.user)
        toast.success('successfully logged in')
        // toast.success("successfully logged in ")
        setTimeout(function () {
            window.location.href = "/";
        }, 1000);
    })
    .catch(error => setErrorMessage(error.message))
  }

  //handle login 
  const handleNormalLogin = event => {
    event.preventDefault()
    const form = event.target
    const password = form.password.value
    const email = form.email.value
    console.log('Name:' ,password ,  'email:', email )
  }

  // hanle Registration
  const handleNormalRegistration = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photourl = form.photourl.value
    const password = form.password.value
    const email = form.email.value
    console.log('Name:', name ,  'email:', email, 'password:', password, 'Photo Url:', photourl )
    if (password.length < 6) {
      setErrorMessage("Password need to be at-least 6 characters")
      return
  }
  if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must need to contain an Uppercase letter ")
      return
  }
  if (!/^(?=.*[a-z]).+$/.test(password)) {
      setErrorMessage("Password must need to contain an LowerCase letter ")
      return
  }
  setErrorMessage(null)

  createUserWithEmailAndPassword(auth, email, password)
  .then(()=>{
    toast.success("user created successfully")
  })
  .catch((error)=>{
    setErrorMessage(error.message)
  })

  }




  return (
    <section className="user min-h-screen">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Dont have an account?</h2>
            <p className="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
            <button className="user_unregistered-signup" id="signup-button" onClick={handleSignupClick}>Sign up</button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account?</h2>
            <p className="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p>
            <button className="user_registered-login" id="login-button" onClick={handleLoginClick}>Login</button>
          </div>
        </div>
        
        <div className={`user_options-forms ${isLoginFormVisible ? 'bounceRight' : 'bounceLeft'}`} id="user_options-forms">
          <div className="user_forms-login">
            <h2 className="forms_title">Login</h2>
            <form onSubmit={handleNormalLogin} className="forms_form">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="email" placeholder="Email" name='email' className="forms_field-input" required autoFocus />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Password" name='password' className="forms_field-input" required />
                </div>
              </fieldset>
              <div className="forms_buttons">
                <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                <input type="submit" value="Log In" className="forms_buttons-action" />
              </div>
              <div className='flex mt-10 justify-center space-x-6'>
                <div><FaGithub onClick={handleGithubSignIn} className='text-2xl cursor-pointer hover:border-[1px] hover:rounded-full' /></div>
                <div><FaGoogle onClick={handleGoogleSignIn} className='text-2xl cursor-pointer hover:border-[1px] hover:rounded-full' /></div>
              </div>
            </form>
          </div>
          <div className="user_forms-signup">
            <h2 className="forms_title">Sign Up</h2>
            <form onSubmit={handleNormalRegistration} className="forms_form lg:p-0">
              <fieldset className="forms_fieldset">
                <div className="forms_field">
                  <input type="text" placeholder="Name" name='name' className="forms_field-input" required />
                </div>
                <div className="forms_field">
                  <input type="url" placeholder="Photo Url" name='photourl' className="forms_field-input" required />
                </div>
                <div className="forms_field">
                  <input type="email" placeholder="Email" name='email' className="forms_field-input" required />
                </div>
                <div className="forms_field">
                  <input type="password" placeholder="Password" name='password' className="forms_field-input" required />
                </div>
              </fieldset>
              <div className='relative'>
              {
                errorMessage && <p className="text-left text-[12px] text-red-600 absolute top-4 ">*{errorMessage}</p>
              }
              </div>
              <div className="forms_buttons">
                <input type="submit" value="Sign up" className="forms_buttons-action" />
              </div>
            </form>
          </div>
        </div>
      </div>
              <ToastContainer />
    </section>
  );
}

export default SignUp;
