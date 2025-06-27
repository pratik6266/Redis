const { kafka } = require('./client')

async function init() {
  const admin = kafka.admin();
  console.log('Connecting to Kafka...');
  await admin.connect();
  console.log('Connected to Kafka');

  console.log('Creating topics...');
  await admin.createTopics({
    topics: [{
      topic: 'riders-updates',
      numPartitions: 2,
    }]
  })
  console.log('Topics created successfully');

  console.log('Disconnected from Kafka');
  await admin.disconnect();
}

init();