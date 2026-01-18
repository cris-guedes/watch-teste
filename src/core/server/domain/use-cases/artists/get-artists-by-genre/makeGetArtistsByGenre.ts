
import { InMemoryArtistRepository } from '@/core/server/infra/mocks/in-memory-artist.repository';
import { GetArtistsByGenre } from './GetArtistsByGenre';

export const makeGetArtistsByGenre = (): GetArtistsByGenre => {
    const repository = new InMemoryArtistRepository();
    return new GetArtistsByGenre(repository);
};
