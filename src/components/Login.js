import axios from 'axios'


const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    if(email === '' || password === ''){
      console.log('there is empty fields');
      return
    }

    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(email !== '' && !regexEmail.test(email)){
      console.log('invalid email format');
      return
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react'){
      console.log('invalid credentials');
      return
    }

    console.log('success, we are ready for the next step');

    axios
      .post('http://challenge-react.alkemy.org', { email, password} )
      .then(res => {
        console.log(res.data);
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span><br />
          <input type="text" name="email" />
        </label>
        <br />

        <label>
          <span>Password:</span><br />
          <input type="password" name="password" />
        </label>
        <br />

        <button>Login</button>
        <br />

      </form>
    </>
  );
}

export default Login;