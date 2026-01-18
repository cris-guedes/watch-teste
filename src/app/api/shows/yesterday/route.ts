
import { nextRouteAdapter } from "@/core/server/main/adapters/next-route-adapter";
import { makeGetYesterdayShows } from "@/core/server/domain/use-cases/shows/get-yesterday-shows/makeGetYesterdayShows";

export const GET = nextRouteAdapter(makeGetYesterdayShows());
