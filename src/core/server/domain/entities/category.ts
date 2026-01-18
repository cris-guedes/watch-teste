
export interface CategoryRecord {
    id: string;
    name: string;
    color: string;
    backgroundUrl: string;
}

export interface CategoryView {
    id: string;
    name: string;
    color: string;
    backgroundUrl: string;
}

export class CategoryMapper {
    static toView(category: CategoryRecord): CategoryView {
        return {
            id: category.id,
            name: category.name,
            color: category.color,
            backgroundUrl: category.backgroundUrl
        };
    }
}
