
import { InMemoryShowRepository } from '@/core/server/infra/mocks/in-memory-show.repository';
import { GetLiveShows } from './GetLiveShows';

export const makeGetLiveShows = (): GetLiveShows => {
    const repository = new InMemoryShowRepository();
    return new GetLiveShows(repository);
};
