
import { CategoryRepository } from '@/core/server/domain/interfaces/repositories/category.repository';
import { CategoryMapper, CategoryView } from '@/core/server/domain/entities';

export class GetFestivalCategories {
    constructor(private readonly categoryRepository: CategoryRepository) { }

    async execute(): Promise<CategoryView[]> {
        const categories = await this.categoryRepository.findAll();
        return categories.map(CategoryMapper.toView);
    }
}
