import { HOME_URL } from "../config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginFetch = async (params) => {
  const { email, password } = { ...params };
  console.log(`${HOME_URL}, ${email}, ${password}`);
  const response = await fetch(`${HOME_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  if (data.status === "ok") {
    // can I use it to set user
    await AsyncStorage.setItem("@token", data.token);
    console.log(`Response Status: ${data.status}`);
    console.log(
      `This is the Token: ${data.token}, \n it is stored locally as @token`
    );
  } else {
    console.log(`STATUS: ${data.status}`);
  }
};

export const registerFetch = async (params) => {
  const { name, email, password } = { ...params };
  const response = await fetch(`${HOME_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
  const data = await response.json();
  if (data.status === "ok") {
    await AsyncStorage.setItem("@token", data.token);
    console.log(`Response Status: ${data.status}`);
    console.log(
      `This is the Token: ${data.token}, \n it is stored locally as @token`
    );
  } else {
    console.log(`STATUS: ${data.status}`);
  }
};