import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetLineUp as ServerUseCase } from "@/core/server/domain/use-cases/artists/get-line-up/GetLineUp";

type Params = Parameters<ServerUseCase["execute"]>[0];
type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetLineUp {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(params?: Params): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.lineup.base,
            method: "GET",
            query: params
        });
        return httpResponse.body;
    }
}

export const makeGetLineUp = (): GetLineUp => {
    return new GetLineUp(new AxiosHttpClient());
};
