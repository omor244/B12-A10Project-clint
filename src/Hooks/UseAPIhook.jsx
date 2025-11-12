import axios from "axios";


const instance = axios.create({
    baseURL: 'https://assignment-10-server-one-iota.vercel.app/',
   
});

const UseAPIhook = () => {
    return instance
};

export default UseAPIhook;