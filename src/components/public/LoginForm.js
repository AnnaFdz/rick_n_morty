import React, { useEffect, useState } from 'react'
import { useUserForm } from '../../hooks/Custom.hooks'

const LoginForm = () => {
  const { form, handleChanges } = useUserForm();

  

  const [passwordConfirmation, setPasswordConfirmation] = useState(); 

  const [pass, setPass] = useState(true)


  
  const validPass = () => { 
    const { password } = form;  
    if (password !== undefined) {
    setPass(false)
  } 
  return pass
  }

  const handlePasswordConfirmation = (e) => {
        setPasswordConfirmation(e.target.value); 
  };

  useEffect(() => {
    const { password } = form; 
    
    validPass()
   }, [ pass]);

  const handleSubmit = (e) => {
   
    e.preventDefault();//no se recarga la pag
    // UserService.save(form);
    console.log(form);
  };
  return (
    <div className="w-25 mx-auto mt-5">
    <h4 className="mb-3">Login!</h4>
    <form className="needs-validation" noValidate>
      <div className="row g-3">
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="you@example.com"
            name="email"
            onChange={handleChanges}
          />
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Clave
          </label>
          <input
            type="password"
            className="form-control"
            id="address"
            placeholder="Clave"
            name="password" 
            onChange={handleChanges}
            required
          />
          <div className="invalid-feedback">
            Please enter your passwor.
          </div>
        </div>

        
        <button
          disabled={pass}
          className="w-100 btn btn-primary btn-lg"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </form>
  </div>
  )
}

export default LoginForm
