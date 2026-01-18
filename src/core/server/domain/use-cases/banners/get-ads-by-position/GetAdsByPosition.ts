
import { BannerRepository } from '@/core/server/domain/interfaces/repositories/banner.repository';
import { BannerMapper, BannerView } from '@/core/server/domain/entities';

export class GetAdsByPosition {
    constructor(private readonly repository: BannerRepository) { }

    async execute(params: { position: string }): Promise<BannerView[]> {
        const banners = await this.repository.findByPosition(params.position);
        return banners.map(BannerMapper.toView);
    }
}
