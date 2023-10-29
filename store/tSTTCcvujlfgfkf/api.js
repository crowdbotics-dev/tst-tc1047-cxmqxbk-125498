import axios from "axios"
import {
  TST_TC1047CVUJLFGFKF_PASSWORD,
  TST_TC1047CVUJLFGFKF_USERNAME
} from "react-native-dotenv"
const tSTTCcvujlfgfkf = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047CVUJLFGFKF_PASSWORD,
    password: TST_TC1047CVUJLFGFKF_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
