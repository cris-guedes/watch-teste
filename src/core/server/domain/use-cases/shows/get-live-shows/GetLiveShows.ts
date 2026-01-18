
import { ShowRepository } from '@/core/server/domain/interfaces/repositories/show.repository';
import { ShowMapper, ShowView } from '@/core/server/domain/entities';

export class GetLiveShows {
    constructor(private readonly showRepository: ShowRepository) { }

    async execute(): Promise<ShowView[]> {
        const shows = await this.showRepository.findLive();
        return shows.map(ShowMapper.toView);
    }
}
