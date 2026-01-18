
import { CategoryRecord } from '@/core/server/domain/entities';

export interface CategoryRepository {
    findAll(): Promise<CategoryRecord[]>;
}
