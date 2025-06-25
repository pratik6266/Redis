import client from "./client.js";

//! this is how you set and get data from redis in key value pair

// async function init() {
//   // await client.set('user:4', 'Pratik Raj')
//   // await client.expire('user:4', 10);
//   const result = await client.get('user:4');
//   console.log("Redis client connected:", result);
// }

// init().catch((error) => {
//   console.error("Error connecting to Redis:", error);
//   process.exit(1);
// });

//! this is how you use list in redis and implement a stack and queue

// async function init(){
//   // await client.lpush('messages', '1');
//   // await client.lpush('messages', '2');
//   // await client.lpush('messages', '3');
//   // await client.lpush('messages', '4');

//   const result = await client.lpop('messages');
//   console.log("Number of messages in the list:", result);
// }

// init();

