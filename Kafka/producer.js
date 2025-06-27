const { kafka } = require('./client');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function init() {
  const producer = kafka.producer();
  console.log('Connecting to Kafka...');
  await producer.connect();
  console.log('Connected to Kafka');

  rl.setPrompt('> ');
  rl.prompt();

  rl.on('line', async (line) => {
    const [rider, location] = line.split(' ');

    try {
      await producer.send({
        topic: 'riders-updates',
        messages: [
          { 
            partition: location.toLowerCase() === 'north' ? 0 : 1,
            key: 'rider1',
            value: JSON.stringify({ name: rider, location }),
          },
        ]
      });
      console.log('Message sent!');
    } 
    catch (err) {
      console.error('Send failed:', err);
    }
    rl.prompt(); 
  });

  rl.on('SIGINT', async () => {
    console.log('\nDisconnecting...');
    await producer.disconnect();
    process.exit(0);
  });
}

init();
