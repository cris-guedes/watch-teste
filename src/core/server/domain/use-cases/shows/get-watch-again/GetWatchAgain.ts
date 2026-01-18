
import { ShowRepository } from '@/core/server/domain/interfaces/repositories/show.repository';
import { ShowMapper, ShowView } from '@/core/server/domain/entities';

export class GetWatchAgain {
    constructor(private readonly repository: ShowRepository) { }

    async execute(): Promise<ShowView[]> {
        const shows = await this.repository.findHistory();
        return shows.map(ShowMapper.toView);
    }
}
