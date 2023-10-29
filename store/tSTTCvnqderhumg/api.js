import axios from "axios"
import {
  TST_TC1047VNQDERHUMG_USERNAME,
  TST_TC1047VNQDERHUMG_PASSWORD
} from "react-native-dotenv"
const tSTTCvnqderhumg = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047VNQDERHUMG_USERNAME,
    password: TST_TC1047VNQDERHUMG_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
