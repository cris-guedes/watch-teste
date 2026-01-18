
import { nextRouteAdapter } from "@/core/server/main/adapters/next-route-adapter";
import { makeGetLiveShows } from "@/core/server/domain/use-cases/shows/get-live-shows/makeGetLiveShows";

export const GET = nextRouteAdapter(makeGetLiveShows());
