
import { InMemoryBannerRepository } from '@/core/server/infra/mocks/in-memory-banner.repository';
import { GetAdsByPosition } from './GetAdsByPosition';

export const makeGetAdsByPosition = (): GetAdsByPosition => {
    const repository = new InMemoryBannerRepository();
    return new GetAdsByPosition(repository);
};
