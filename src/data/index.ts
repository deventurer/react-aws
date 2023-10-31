import  axios from 'axios'

const getData = async () => {
   const data = await axios.get('https://f54cqrwnk5hrzzo2yl3dibjr5u0egjtq.lambda-url.us-east-2.on.aws/');
   console.log(data);
   return data.data;
}
export default getData;