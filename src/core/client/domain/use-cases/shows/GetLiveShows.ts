
import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetLiveShows as ServerUseCase } from "@/core/server/domain/use-cases/shows/get-live-shows/GetLiveShows";

type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetLiveShows {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.shows.live,
            method: "GET"
        });
        return httpResponse.body;
    }
}

export const makeGetLiveShows = (): GetLiveShows => {
    return new GetLiveShows(new AxiosHttpClient());
};
