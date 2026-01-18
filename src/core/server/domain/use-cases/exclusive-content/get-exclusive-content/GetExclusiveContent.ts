
import { ExclusiveContentRepository } from '@/core/server/domain/interfaces/repositories/exclusive-content.repository';
import { ExclusiveContentMapper, ExclusiveContentView } from '@/core/server/domain/entities';

export class GetExclusiveContent {
    constructor(private readonly repository: ExclusiveContentRepository) { }

    async execute(): Promise<ExclusiveContentView[]> {
        const contents = await this.repository.findAll();
        return contents.map(ExclusiveContentMapper.toView);
    }
}
