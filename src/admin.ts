import { DriftQ } from './client';

export interface Topic {
  name: string;
  partitions: number;
  compacted?: boolean;
}

export class Admin {
  constructor(private c: DriftQ) {}

  async listTopics(): Promise<Topic[]> {
    // TODO: call Admin.ListTopics
    return [];
  }

  async createTopic(topic: Topic): Promise<void> {
    // TODO: call Admin.CreateTopic
    void topic;
  }
}
