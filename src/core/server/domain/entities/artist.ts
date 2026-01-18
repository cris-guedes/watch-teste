
export interface ArtistRecord {
    id: string;
    name: string;
    imageUrl: string;
    genre: string;
    type: 'HEADLINER' | 'ACT';
}

export interface ArtistView {
    id: string;
    name: string;
    imageUrl: string;
    genre: string;
    isHeadliner: boolean;
}

export class ArtistMapper {
    static toView(artist: ArtistRecord): ArtistView {
        return {
            id: artist.id,
            name: artist.name,
            imageUrl: artist.imageUrl,
            genre: artist.genre,
            isHeadliner: artist.type === 'HEADLINER'
        };
    }
}
