
export interface ExclusiveContentRecord {
    id: string;
    title: string;
    type: string;
    mediaUrl: string;
    thumbnailUrl: string;
}

export interface ExclusiveContentView {
    id: string;
    title: string;
    type: string;
    mediaUrl: string;
    thumbnailUrl: string;
}

export class ExclusiveContentMapper {
    static toView(content: ExclusiveContentRecord): ExclusiveContentView {
        return {
            id: content.id,
            title: content.title,
            type: content.type,
            mediaUrl: content.mediaUrl,
            thumbnailUrl: content.thumbnailUrl
        };
    }
}
