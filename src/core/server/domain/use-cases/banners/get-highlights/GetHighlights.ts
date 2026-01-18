
import { BannerRepository } from '@/core/server/domain/interfaces/repositories/banner.repository';
import { BannerMapper, BannerView } from '@/core/server/domain/entities';

export class GetHighlights {
    constructor(private readonly bannerRepository: BannerRepository) { }

    async execute(): Promise<BannerView[]> {
        const heroes = await this.bannerRepository.findByType('HERO');
        const ads = await this.bannerRepository.findByType('AD');
        const all = [...heroes, ...ads];
        return all.map(BannerMapper.toView);
    }
}
