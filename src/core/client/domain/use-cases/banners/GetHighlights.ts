
import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetHighlights as ServerUseCase } from "@/core/server/domain/use-cases/banners/get-highlights/GetHighlights";

type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetHighlights {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.highlights.base,
            method: "GET"
        });
        return httpResponse.body;
    }
}

export const makeGetHighlights = (): GetHighlights => {
    return new GetHighlights(new AxiosHttpClient());
};
