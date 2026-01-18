
import { InMemoryShowRepository } from '@/core/server/infra/mocks/in-memory-show.repository';
import { GetWatchAgain } from './GetWatchAgain';

export const makeGetWatchAgain = (): GetWatchAgain => {
    const repository = new InMemoryShowRepository();
    return new GetWatchAgain(repository);
};
