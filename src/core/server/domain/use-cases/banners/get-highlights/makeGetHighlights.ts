
import { InMemoryBannerRepository } from '@/core/server/infra/mocks/in-memory-banner.repository';
import { GetHighlights } from './GetHighlights';

export const makeGetHighlights = (): GetHighlights => {
    const repository = new InMemoryBannerRepository();
    return new GetHighlights(repository);
};
