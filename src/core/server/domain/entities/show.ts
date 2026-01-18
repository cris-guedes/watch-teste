
export interface ShowRecord {
    id: string;
    artistId: string;
    title: string;
    status: 'SCHEDULED' | 'LIVE' | 'COMPLETED';
    thumbnailUrl: string;
    videoUrl: string;
    startsAt: Date;
    endsAt: Date;
    artistName?: string;
}

export interface ShowView {
    id: string;
    title: string;
    artistName: string;
    status: string;
    thumbnailUrl: string;
    isLive: boolean;
}

export class ShowMapper {
    static toView(show: ShowRecord): ShowView {
        return {
            id: show.id,
            title: show.title || '',
            artistName: show.artistName || 'Unknown Artist',
            status: show.status,
            thumbnailUrl: show.thumbnailUrl || '',
            isLive: show.status === 'LIVE',
        };
    }
}
