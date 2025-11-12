import { DriftQ } from '../dist';

async function main() {
  const client = await DriftQ.dial({ address: 'localhost:9090' });

  const stop = await client.consumer('orders', 'orders-workers').start(async (m) => {
    console.log('consumed (stub):', m.key, m.value.toString());
  });

  await client.producer('orders').send({ key: 'k', value: Buffer.from('hello') });

  await stop();
  await client.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
