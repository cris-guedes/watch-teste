
import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetAdsByPosition as ServerUseCase } from "@/core/server/domain/use-cases/banners/get-ads-by-position/GetAdsByPosition";

type Params = Parameters<ServerUseCase["execute"]>[0];
type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetAdsByPosition {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(params: Params): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.banners.ads,
            method: "GET",
            query: params
        });
        return httpResponse.body;
    }
}

export const makeGetAdsByPosition = (): GetAdsByPosition => {
    return new GetAdsByPosition(new AxiosHttpClient());
};
