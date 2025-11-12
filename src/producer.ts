import { DriftQ } from './client';
import { Message } from './types';

export class Producer {
  constructor(private topic: string, private c: DriftQ) {}

  async send(msg: Message): Promise<void> {
    await this.c._send(this.topic, msg);
  }
}
