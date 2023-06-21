import axios, {CreateAxiosDefaults} from 'axios'

const config:CreateAxiosDefaults<any> = {
  baseURL: 'http://localhost:3000'
}
export const api = axios.create(config)