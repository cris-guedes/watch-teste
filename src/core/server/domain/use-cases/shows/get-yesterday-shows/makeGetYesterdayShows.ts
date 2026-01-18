
import { InMemoryShowRepository } from '@/core/server/infra/mocks/in-memory-show.repository';
import { GetYesterdayShows } from './GetYesterdayShows';

export const makeGetYesterdayShows = (): GetYesterdayShows => {
    const repository = new InMemoryShowRepository();
    return new GetYesterdayShows(repository);
};
