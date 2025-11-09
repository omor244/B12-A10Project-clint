import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:3000',
   
});

const UseAPIhook = () => {
    return instance
};

export default UseAPIhook;