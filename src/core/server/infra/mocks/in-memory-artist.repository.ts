
import { ArtistRepository } from '@/core/server/domain/interfaces/repositories/artist.repository';
import { ArtistRecord, PaginationParams } from '@/core/server/domain/entities';

const artists: ArtistRecord[] = [
    { id: '1', name: 'Avril Lavigne', imageUrl: '/assets/singers/avril.png', genre: 'Rock', type: 'HEADLINER' },
    { id: '2', name: 'Marshmello', imageUrl: '/assets/singers/marshmello.png', genre: 'Electronic', type: 'HEADLINER' },
    { id: '3', name: 'Alok', imageUrl: '/assets/singers/alok.png', genre: 'Electronic', type: 'ACT' },
    { id: '4', name: 'Rita Ora', imageUrl: '/assets/singers/rita-ora.png', genre: 'Pop', type: 'ACT' },
    { id: '5', name: 'The Offspring', imageUrl: '/assets/singers/offspring.png', genre: 'Rock', type: 'ACT' },
    { id: '6', name: 'Dream Theatre', imageUrl: '/assets/singers/dream-theate.png', genre: 'Metal', type: 'ACT' },
    { id: '7', name: 'Coldplay', imageUrl: '/assets/singers/codplay.png', genre: 'Pop', type: 'ACT' },
    { id: '8', name: 'Black Pantera', imageUrl: '/assets/singers/black-pantera.png', genre: 'Heavy Metal', type: 'ACT' },
    { id: '9', name: 'Maneskin', imageUrl: '/assets/shows/maneskin.png', genre: 'Rock', type: 'ACT' },
    { id: '10', name: 'Dua Lipa', imageUrl: '/assets/singers/dua-lipa.png', genre: 'Pop', type: 'ACT' },
];

export class InMemoryArtistRepository implements ArtistRepository {
    async findAll(params?: PaginationParams): Promise<ArtistRecord[]> {
        let result = [...artists];
        if (params?.limit) result = result.slice(0, params.limit);
        return result;
    }

    async findByGenre(genre: string): Promise<ArtistRecord[]> {
        return artists.filter(a => a.genre.toLowerCase() === genre.toLowerCase());
    }
}
