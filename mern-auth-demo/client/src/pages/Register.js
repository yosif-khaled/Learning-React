import {useState} from 'react'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const registerUser = async (e) => {
      e.preventDefault()
      const response = await fetch('http://localhost:3030/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        })
      })
  
      const data = await response.json()

      if(data.status==='ok'){
        history.pushState('/login')
      }

      console.log(data)
    }
  
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input type="text" placeholder='user name' value={name} onChange={e => { setName(e.target.value) }} /> <br />
          <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
          <br />
          <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} /> <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  
}

export default Register