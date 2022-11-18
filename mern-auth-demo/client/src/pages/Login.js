import {useState} from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const loginUser = async (e) => {
      e.preventDefault()
      const response = await fetch('http://localhost:3030/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        })
      })
  
      const data = await response.json()

      if(data.user){
        alert('Login Successful')
        // the route supposedly goes here
        window.location.href = '/'
      } else {
        alert('Check Username and Password')
      }

      console.log(data)
    }
  
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
          <br />
          <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} /> <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  
}

export default Login