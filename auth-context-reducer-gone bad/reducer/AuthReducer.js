// Variables
// name, email, token, isLoggedIn
// functions
// login, register, 

import AsyncStorage from "@react-native-async-storage/async-storage"

export const initialState = {
    name: '',
    email: '',
    password: '',
    token: '',
    isLoggenIn: false,
}

export const reducer = (action, state) => {
    // const data = fetchingUser(state.name, state.email, state.password)
    switch (action) {
        case 'Login':
            const loginData = fetchingUser(state.name, state.email, state.password, 'login')
            console.log(loginData);
            state = {name: state.name, email: state.email, password: state.password, token: data.user, isLoggenIn: true}
            return data
        case 'Register':
            const registerData = fetchingUser(state.name, state.email, state.password, 'register')
            console.log(registerData);
            return registerData
        case 'Logout':
            AsyncStorage.removeItem('token')
            return initialState
        default:
            state = initialState
    }
}

const fetchingUser = async (name, email, password, type) => {
    const url = '192.168.43.108'
    const response = await fetch(`http://${url}/api/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

    const data = await response.json()
    storingToken(data)
    return data
}

const storingToken = (data) => {
    if (data.status === "ok") {
        const token = data.user;
        AsyncStorage.setItem("token", token);
        console.log(data.user);
    }
    console.log('Token Fetch Failed: Function Storing Token')
}