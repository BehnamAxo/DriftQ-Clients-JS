import { DriftQ } from '../dist';

async function main() {
  const client = await DriftQ.dial({ address: 'localhost:9090' });
  const topics = await client.admin().listTopics();
  console.log('topics:', topics);
  await client.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
