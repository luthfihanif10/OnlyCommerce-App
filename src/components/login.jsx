import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault()
    
    try {
      const response = await axios.post('https://onlycommerce.onrender.com/login', {
        username,
        password,
      });
      const data = response.data;

      if (data.redirect) {
        // Redirect to the specified URL based on the server response
        alert('Login Berhasil')
        
        // ('#modalLogin').modal('hide');
        window.location.reload(false);
        window.location.href = data.redirect;
      } else {
        // Handle other responses as needed
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (

    <div  data-testid="Login" className="modal fade" tabIndex="-1" role="dialog" id="Login">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Log-in</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body p-5 pt-0 gap-2">
            <div className="row gap-3">
          <button className="btn btn-dark" data-bs-dismiss="modal" onClick={() => navigate('warehouse')}>
        Login Warehouse Employee
      </button>

      {/* Login Shop Employee Button */}
      <button className="btn btn-dark" data-bs-dismiss="modal" onClick={() => navigate('/shop')}>
        Login Shop Employee
      </button>
      </div>
            {/* <form className="" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input type="username" className="form-control rounded-3" id="floatingEmail" placeholder="Username"  value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlName="floatingEmail">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-success" type="submit">Log-in</button>
              <small className="text-body-secondary">Jika Anda belum memiliki akun, silahkan melakukan Sign-Up</small>
            </form> */}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Login;