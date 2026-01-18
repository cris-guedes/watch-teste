
export interface HttpRequest {
    body?: any;
    query?: any;
    params?: any;
    headers?: any;
}

export interface HttpResponse {
    statusCode: number;
    data: any;
}

export interface Controller {
    handle(request: HttpRequest): Promise<HttpResponse>;
}

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    data
});

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    data: {
        success: false,
        message: error.message
    }
});

export const nextRouteAdapter = (useCase: any) => {
    return async (request: Request, { params }: { params: any }) => {
        const url = new URL(request.url);
        const query = Object.fromEntries(url.searchParams.entries());

        const httpRequest: HttpRequest = {
            query,
            params,
            headers: Object.fromEntries(request.headers.entries()),
        };

        if (request.method !== 'GET' && request.method !== 'DELETE') {
            try {
                httpRequest.body = await request.json();
            } catch (e) {
                httpRequest.body = {};
            }
        }

        try {
            // If it's a Use Case with execute method
            if (useCase.execute) {
                const result = await useCase.execute(httpRequest.query || httpRequest.params);
                return Response.json(result, { status: 200 });
            }

            // If it's a Controller with handle method
            if (useCase.handle) {
                const httpResponse = await useCase.handle(httpRequest);
                return Response.json(httpResponse.data, { status: httpResponse.statusCode });
            }

            throw new Error('Invalid controller or use case');
        } catch (error: any) {
            return Response.json({
                success: false,
                message: error.message || 'Internal Server Error'
            }, { status: 500 });
        }
    };
};
