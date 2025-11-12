import { DriftQ } from './client';
import { Message } from './types';

export type Handler = (msg: Message) => Promise<void> | void;

export class Consumer {
  constructor(private topic: string, private group: string, private c: DriftQ) {}

  async start(handler: Handler): Promise<() => Promise<void>> {
    // TODO: open stream, deliver to handler. Here we just return a stop fn.
    void handler;
    const stop = async () => { /* close stream */ };
    return stop;
  }
}
