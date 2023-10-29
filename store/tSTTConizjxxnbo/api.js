import axios from "axios"
import {
  TST_TC1047ONIZJXXNBO_PASSWORD,
  TST_TC1047ONIZJXXNBO_USERNAME
} from "react-native-dotenv"
const tSTTConizjxxnbo = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047ONIZJXXNBO_PASSWORD,
    password: TST_TC1047ONIZJXXNBO_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
