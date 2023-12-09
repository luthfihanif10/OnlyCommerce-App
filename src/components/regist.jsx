import React, { useState } from "react";
import axios from 'axios';
import { Alert } from "bootstrap";


function Register() {

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit(e){
    e.preventDefault()
    alert("fitur ini masih dalam tahap pengembangan")
 
  }

  return (
    // modal-sheet fade position-static d-block bg-body-secondary p-4 py-md-5
    <div  data-testid="Register" className="modal fade" tabIndex="-1" role="dialog" id="modalSignIn">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Sign-up</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body p-5 pt-0">
            <form className="" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="username" className="form-control rounded-3" id="floatingUsername" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="floatingUsername">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">Sign-up</button>
              <small className="text-body-secondary">Klik Sign-up untuk membuat akun OnlyCommerce</small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;