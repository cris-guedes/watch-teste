
import { InMemoryExclusiveContentRepository } from '@/core/server/infra/mocks/in-memory-exclusive-content.repository';
import { GetExclusiveContent } from './GetExclusiveContent';

export const makeGetExclusiveContent = (): GetExclusiveContent => {
    const repository = new InMemoryExclusiveContentRepository();
    return new GetExclusiveContent(repository);
};
