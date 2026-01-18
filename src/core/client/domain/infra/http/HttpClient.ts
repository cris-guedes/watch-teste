
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type HttpRequest<TBody = any, TQuery = any> = {
    url: string;
    method: HttpMethod;
    body?: TBody;
    query?: TQuery;
    headers?: Record<string, string>;
};

export type HttpResponse<TResponse = any> = {
    statusCode: number;
    body: TResponse;
};

export interface HttpClient {
    request<TResponse = any, TBody = any, TQuery = any>(
        data: HttpRequest<TBody, TQuery>
    ): Promise<HttpResponse<TResponse>>;
}

export class AxiosHttpClient implements HttpClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL || "",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    async request<TResponse = any, TBody = any, TQuery = any>(
        data: HttpRequest<TBody, TQuery>
    ): Promise<HttpResponse<TResponse>> {
        const config: AxiosRequestConfig = {
            url: data.url,
            method: data.method,
            data: data.body,
            params: data.query,
            headers: data.headers,
        };

        try {
            const response = await this.client.request(config);
            return {
                statusCode: response.status,
                body: response.data as TResponse,
            };
        } catch (error: any) {
            const statusCode = error.response?.status || 500;
            const body = error.response?.data || { message: error.message };

            const err: any = new Error(body.message || "Request failed");
            err.statusCode = statusCode;
            err.body = body;
            throw err;
        }
    }
}
