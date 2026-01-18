
import { BannerRepository } from '@/core/server/domain/interfaces/repositories/banner.repository';
import { BannerMapper, BannerView } from '@/core/server/domain/entities';

export class GetAds {
    constructor(private readonly repository: BannerRepository) { }

    async execute(): Promise<BannerView[]> {
        const banners = await this.repository.findByType('AD');
        return banners.map(BannerMapper.toView);
    }
}
