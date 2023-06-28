import axios, {CreateAxiosDefaults} from 'axios'

axios.defaults.headers.common['header1'] = ''

const config:CreateAxiosDefaults<any> = {
  baseURL: 'http://localhost:3000'
}
export const api = axios.create(config)