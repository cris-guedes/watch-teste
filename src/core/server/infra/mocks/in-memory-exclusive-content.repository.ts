
import { ExclusiveContentRepository } from '@/core/server/domain/interfaces/repositories/exclusive-content.repository';
import { ExclusiveContentRecord } from '@/core/server/domain/entities';

const exclusiveContents: ExclusiveContentRecord[] = [
    { id: 'ec1', title: 'Back Stage', type: 'Backstage', mediaUrl: '...', thumbnailUrl: '/assets/exlusive-content/back-stage.jpg' },
    { id: 'ec2', title: 'Interviews', type: 'Interview', mediaUrl: '...', thumbnailUrl: '/assets/exlusive-content/interviews.jpg' },
];

export class InMemoryExclusiveContentRepository implements ExclusiveContentRepository {
    async findAll(): Promise<ExclusiveContentRecord[]> {
        return exclusiveContents;
    }
}
