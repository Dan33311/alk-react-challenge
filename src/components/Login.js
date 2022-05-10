import axios from 'axios'
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom'


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

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5 text-center">
        <label className='mb-2'>
          <span>Email:</span><br />
          <input className='form-control' type="text" name="email" />
        </label>
        <br />

        <label className='mb-2'>
          <span>Password:</span><br />
          <input className='form-control' type="password" name="password" />
        </label>
        <br />

        <button className='btn btn-primary mt-2 px-5'>Login</button>
        <br />

      </form>
    </>
  );
}

export default Login;