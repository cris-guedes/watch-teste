
import { ArtistRepository } from '@/core/server/domain/interfaces/repositories/artist.repository';
import { ArtistMapper, ArtistView } from '@/core/server/domain/entities';

export class GetArtistsByGenre {
    constructor(private readonly repository: ArtistRepository) { }

    async execute(params: { genre: string }): Promise<ArtistView[]> {
        const artists = await this.repository.findByGenre(params.genre);
        return artists.map(ArtistMapper.toView);
    }
}
