import axios from "axios"
import {
  TST_TC1047KDZCQDBZSP_USERNAME,
  TST_TC1047KDZCQDBZSP_PASSWORD
} from "react-native-dotenv"
const tSTTCkdzcqdbzsp = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047KDZCQDBZSP_USERNAME,
    password: TST_TC1047KDZCQDBZSP_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
