
import { ShowRepository } from '@/core/server/domain/interfaces/repositories/show.repository';
import { ShowMapper, ShowView } from '@/core/server/domain/entities';

export class GetYesterdayShows {
    constructor(private readonly showRepository: ShowRepository) { }

    async execute(): Promise<ShowView[]> {
        const shows = await this.showRepository.findCompleted(10);
        return shows.map(ShowMapper.toView);
    }
}
