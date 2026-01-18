
import { InMemoryBannerRepository } from '@/core/server/infra/mocks/in-memory-banner.repository';
import { GetAds } from './GetAds';

export const makeGetAds = (): GetAds => {
    const repository = new InMemoryBannerRepository();
    return new GetAds(repository);
};
