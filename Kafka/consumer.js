const { kafka } = require('./client');  
const group = process.argv[2] || 'user-1'; // Default group if not provided

async function init() {
  const consumer  = kafka.consumer({ groupId: 'user-1' });
  await consumer.connect();

  console.log('Connected to Kafka');

  await consumer.subscribe({ topic: 'riders-updates', fromBeginning: true }); 

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`${message.value.toString()} from topic: ${topic}, partition: ${partition}, group: ${group}`);
    } 
  });

  // await consumer.disconnect();
}

init();