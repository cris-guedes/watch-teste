
import { InMemoryCategoryRepository } from '@/core/server/infra/mocks/in-memory-category.repository';
import { GetFestivalCategories } from './GetFestivalCategories';

export const makeGetFestivalCategories = (): GetFestivalCategories => {
    const repository = new InMemoryCategoryRepository();
    return new GetFestivalCategories(repository);
};
