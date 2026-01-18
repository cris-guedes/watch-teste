import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetAds as ServerUseCase } from "@/core/server/domain/use-cases/banners/get-ads/GetAds";

type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetAds {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.banners.ads,
            method: "GET"
        });
        return httpResponse.body;
    }
}

export const makeGetAds = (): GetAds => {
    return new GetAds(new AxiosHttpClient());
};
