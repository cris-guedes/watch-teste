
import { ShowRecord } from '@/core/server/domain/entities';

export interface ShowRepository {
    findLive(): Promise<ShowRecord[]>;
    findCompleted(limit?: number): Promise<ShowRecord[]>;
    findByArtist(artistId: string): Promise<ShowRecord[]>;
    findHistory(): Promise<ShowRecord[]>;
}
