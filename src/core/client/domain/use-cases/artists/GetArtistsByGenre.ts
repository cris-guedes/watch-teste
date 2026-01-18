
import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetArtistsByGenre as ServerUseCase } from "@/core/server/domain/use-cases/artists/get-artists-by-genre/GetArtistsByGenre";

type Params = Parameters<ServerUseCase["execute"]>[0];
type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetArtistsByGenre {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(params: Params): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.artists.genre(params.genre),
            method: "GET"
        });
        return httpResponse.body;
    }
}

export const makeGetArtistsByGenre = (): GetArtistsByGenre => {
    return new GetArtistsByGenre(new AxiosHttpClient());
};
