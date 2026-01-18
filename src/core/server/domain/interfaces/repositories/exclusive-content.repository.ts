
import { ExclusiveContentRecord } from '@/core/server/domain/entities';

export interface ExclusiveContentRepository {
    findAll(): Promise<ExclusiveContentRecord[]>;
}
