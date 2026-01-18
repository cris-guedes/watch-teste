
import { ShowRepository } from '@/core/server/domain/interfaces/repositories/show.repository';
import { ShowRecord } from '@/core/server/domain/entities';

const shows: ShowRecord[] = [
    {
        id: '1', artistId: '1', artistName: 'Avril Lavigne', title: 'Main Stage Live',
        status: 'LIVE', thumbnailUrl: '/assets/in-live/stage-world.png', videoUrl: '...',
        startsAt: new Date(), endsAt: new Date()
    },
    {
        id: '11', artistId: '3', artistName: 'Alok', title: 'Summer 2026',
        status: 'LIVE', thumbnailUrl: '/assets/in-live/stage-favela.png', videoUrl: '...',
        startsAt: new Date(), endsAt: new Date()
    },
    {
        id: '12', artistId: '4', artistName: 'Rita Ora', title: 'Sunset Party',
        status: 'LIVE', thumbnailUrl: '/assets/in-live/stage-sunset.png', videoUrl: '...',
        startsAt: new Date(), endsAt: new Date()
    },
    {
        id: '2', artistId: '2', artistName: 'Marshmello', title: 'Yesterday Highlights',
        status: 'COMPLETED', thumbnailUrl: '/assets/shows/marshmello.png', videoUrl: '...',
        startsAt: new Date(Date.now() - 86400000), endsAt: new Date(Date.now() - 86400000 + 3600000)
    },
    {
        id: '22', artistId: '6', artistName: 'Dream Theatre', title: 'Nightmare to Remember',
        status: 'COMPLETED', thumbnailUrl: '/assets/shows/dream-theate.png', videoUrl: '...',
        startsAt: new Date(Date.now() - 86400000), endsAt: new Date(Date.now() - 86400000 + 3600000)
    },
    {
        id: '23', artistId: '10', artistName: 'Dua Lipa', title: 'Future Nostalgia',
        status: 'COMPLETED', thumbnailUrl: '/assets/singers/dua-lipa.png', videoUrl: '...',
        startsAt: new Date(Date.now() - 86400000), endsAt: new Date(Date.now() - 86400000 + 3600000)
    },
    {
        id: '24', artistId: '9', artistName: 'Maneskin', title: 'Rush! World Tour',
        status: 'COMPLETED', thumbnailUrl: '/assets/shows/maneskin.png', videoUrl: '...',
        startsAt: new Date(Date.now() - 86400000), endsAt: new Date(Date.now() - 86400000 + 3600000)
    },
    {
        id: '25', artistId: '5', artistName: 'The Offspring', title: 'Americana',
        status: 'COMPLETED', thumbnailUrl: '/assets/watch-again/offspring.png', videoUrl: '...',
        startsAt: new Date(Date.now() - 172800000), endsAt: new Date(Date.now() - 172800000 + 3600000)
    },
    {
        id: '26', artistId: '8', artistName: 'Black Pantera', title: 'Ascensão',
        status: 'COMPLETED', thumbnailUrl: '/assets/watch-again/black-pantera.png', videoUrl: '...',
        startsAt: new Date(Date.now() - 172800000), endsAt: new Date(Date.now() - 172800000 + 3600000)
    },
];

export class InMemoryShowRepository implements ShowRepository {
    async findLive(): Promise<ShowRecord[]> {
        return shows.filter(s => s.status === 'LIVE');
    }
    async findCompleted(limit?: number): Promise<ShowRecord[]> {
        const result = shows.filter(s => s.status === 'COMPLETED');
        return limit ? result.slice(0, limit) : result;
    }
    async findByArtist(artistId: string): Promise<ShowRecord[]> {
        return shows.filter(s => s.artistId === artistId);
    }
    async findHistory(): Promise<ShowRecord[]> {
        return shows.slice(0, 8); // Mock history
    }
}
