import { Participant } from '@uat-multiple-tenant-individual-token-application/sdk';
import { client } from '../../utils/client';

export async function countParticipants(): Promise<number> {
  return await client(Participant)
    .aggregate({
      $select: { $count: 'unordered' }
    }).then(res => res.$count);
}
