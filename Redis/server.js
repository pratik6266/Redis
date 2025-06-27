import express from 'express';
import axios from 'axios';
import client from "./client.js";

const app = express();

app.get('/', async (req, res) => {
  
  const cachedPost = await client.get('posts');
  if (cachedPost) {
    console.log('Cache hit');
    return res.json(JSON.parse(cachedPost));
  }

  const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
  await client.set('posts', JSON.stringify(data.data));
  return res.json(data.data);
})

app.listen(2300, () => {
  console.log('Server is running on port 2300');
})