import axios from "axios"
import {
  TST_TC1047QPZYUZXJTV_PASSWORD,
  TST_TC1047QPZYUZXJTV_USERNAME
} from "react-native-dotenv"
const tSTTCqpzyuzxjtv = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  auth: {
    username: TST_TC1047QPZYUZXJTV_PASSWORD,
    password: TST_TC1047QPZYUZXJTV_USERNAME
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
