import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetWatchAgain as ServerUseCase } from "@/core/server/domain/use-cases/shows/get-watch-again/GetWatchAgain";

type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetWatchAgain {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.shows.watchAgain,
            method: "GET"
        });
        return httpResponse.body;
    }
}

export const makeGetWatchAgain = (): GetWatchAgain => {
    return new GetWatchAgain(new AxiosHttpClient());
};
