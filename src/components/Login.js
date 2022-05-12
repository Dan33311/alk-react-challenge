import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import swAlert from '@sweetalert/with-react'


const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    

    if(email === '' || password === ''){
      swAlert(<p>there is empty fields</p>)
      return
    }

    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(email !== '' && !regexEmail.test(email)){
      swAlert(<p>invalid email format</p>)
      return
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react'){
      swAlert(<p>invalid credentials</p>)
      return
    }

    axios
      .post('http://challenge-react.alkemy.org', { email, password} )
      .then(res => {
        swAlert(<p>success, we are ready for the next step</p>)
        const token = res.data.token
        localStorage.setItem('token', token)
        navigate('/list')
        // console.log(res.data); // TOKEN gotten
      })
  }

  let token = localStorage.getItem('token')


  return (
    <>
      { token 
        ? 
          <Navigate to='/list' />
        :
          <div className="container">
            <div className="row d-flex flex-column justify-content-center align-items-center mt-5">
              <form onSubmit={handleSubmit} className="col-8 col-sm-6 col-md-6 col-lg-4">
                <label className='mb-2 w-100'>
                  <span>Email:</span><br />
                  <input className='form-control' type="text" name="email" />
                </label>
                <br />

                <label className='mb-2 w-100'>
                  <span>Password:</span><br />
                  <input className='form-control' type="password" name="password" />
                </label>
                <br />

                <button className='btn btn-primary mt-2 w-100'>Login</button>
                <br />

              </form>
            </div>
          </div>
          
      }
    </>
  )
}

export default Login