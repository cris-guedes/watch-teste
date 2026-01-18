
import { InMemoryArtistRepository } from '@/core/server/infra/mocks/in-memory-artist.repository';
import { GetLineUp } from './GetLineUp';

export const makeGetLineUp = (): GetLineUp => {
    const repository = new InMemoryArtistRepository();
    return new GetLineUp(repository);
};
