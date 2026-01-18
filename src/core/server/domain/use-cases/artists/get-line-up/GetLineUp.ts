
import { ArtistRepository } from '@/core/server/domain/interfaces/repositories/artist.repository';
import { ArtistMapper, ArtistView, PaginationParams } from '@/core/server/domain/entities';

export class GetLineUp {
    constructor(private readonly artistRepository: ArtistRepository) { }

    async execute(params?: PaginationParams): Promise<ArtistView[]> {
        const artists = await this.artistRepository.findAll(params);
        return artists.map(ArtistMapper.toView);
    }
}
