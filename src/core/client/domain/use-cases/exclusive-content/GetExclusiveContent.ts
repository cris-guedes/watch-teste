
import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetExclusiveContent as ServerUseCase } from "@/core/server/domain/use-cases/exclusive-content/get-exclusive-content/GetExclusiveContent";

type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetExclusiveContent {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.exclusive.base,
            method: "GET"
        });
        return httpResponse.body;
    }
}

export const makeGetExclusiveContent = (): GetExclusiveContent => {
    return new GetExclusiveContent(new AxiosHttpClient());
};
