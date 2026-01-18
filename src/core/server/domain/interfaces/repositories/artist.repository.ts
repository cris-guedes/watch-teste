
import { ArtistRecord, PaginationParams } from '@/core/server/domain/entities';

export interface ArtistRepository {
    findAll(params?: PaginationParams): Promise<ArtistRecord[]>;
    findByGenre(genre: string): Promise<ArtistRecord[]>;
}
