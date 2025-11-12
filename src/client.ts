import { DriftQConfig, Message } from './types';
import { Producer } from './producer';
import { Consumer } from './consumer';
import { Admin } from './admin';

/**
 * DriftQ main client. This initial version is a no-op stub so the SDK compiles.
 * Network calls will be added when gRPC stubs are wired in.
 */
export class DriftQ {
  private cfg: DriftQConfig;

  private constructor(cfg: DriftQConfig) {
    this.cfg = cfg;
  }

  static async dial(cfg: DriftQConfig): Promise<DriftQ> {
    // TODO: open network connection(s) here (gRPC)
    return new DriftQ(cfg);
  }

  async close(): Promise<void> {
    // TODO: close connections
  }

  producer(topic: string): Producer {
    return new Producer(topic, this);
  }

  consumer(topic: string, group: string): Consumer {
    return new Consumer(topic, group, this);
  }

  admin(): Admin {
    return new Admin(this);
  }

  // internal hook for future RPC invocation
  /* eslint-disable @typescript-eslint/no-unused-vars */
  _send(_topic: string, _msg: Message): Promise<void> {
    // TODO: call Produce RPC
    return Promise.resolve();
  }
}
