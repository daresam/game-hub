import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cc9462558c4e4ed8a0e5df4aad86f277'
    }
})