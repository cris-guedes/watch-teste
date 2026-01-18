
import { CategoryRepository } from '@/core/server/domain/interfaces/repositories/category.repository';
import { CategoryRecord } from '@/core/server/domain/entities';

const categories: CategoryRecord[] = [
    { id: 'c1', name: 'Rock', color: '#1a1a1a', backgroundUrl: '/assets/categories/rock.png' },
    { id: 'c2', name: 'Pop', color: '#1a73e8', backgroundUrl: '/assets/categories/pop.png' },
    { id: 'c3', name: 'Electronic', color: '#9c27b0', backgroundUrl: '/assets/categories/rock.png' },
    { id: 'c4', name: 'Funk', color: '#ff5722', backgroundUrl: '/assets/categories/funk.png' },
];

export class InMemoryCategoryRepository implements CategoryRepository {
    async findAll(): Promise<CategoryRecord[]> {
        return categories;
    }
}
