export type Headers = Record<string, string>;

export interface Message {
  key: string;
  value: Buffer;
  headers?: Headers;
}

export interface DriftQConfig {
  address: string;
  // TODO: tls options, timeouts, retries
}
