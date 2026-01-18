
import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetYesterdayShows as ServerUseCase } from "@/core/server/domain/use-cases/shows/get-yesterday-shows/GetYesterdayShows";

type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetYesterdayShows {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.shows.yesterday,
            method: "GET"
        });
        return httpResponse.body;
    }
}

export const makeGetYesterdayShows = (): GetYesterdayShows => {
    return new GetYesterdayShows(new AxiosHttpClient());
};
