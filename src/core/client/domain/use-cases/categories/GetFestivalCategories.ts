import { HttpClient, AxiosHttpClient } from "@/core/client/domain/infra/http/HttpClient";
import { resources } from "@/core/shared/config/resources";
import { GetFestivalCategories as ServerUseCase } from "@/core/server/domain/use-cases/categories/get-categories/GetFestivalCategories";

type Response = Awaited<ReturnType<ServerUseCase["execute"]>>;

export class GetFestivalCategories {
    constructor(private readonly httpClient: HttpClient) { }

    async execute(): Promise<Response> {
        const httpResponse = await this.httpClient.request({
            url: resources.categories.base,
            method: "GET"
        });
        return httpResponse.body;
    }
}

export const makeGetFestivalCategories = (): GetFestivalCategories => {
    return new GetFestivalCategories(new AxiosHttpClient());
};
