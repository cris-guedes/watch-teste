
import { nextRouteAdapter } from "@/core/server/main/adapters/next-route-adapter";
import { makeGetWatchAgain } from "@/core/server/domain/use-cases/shows/get-watch-again/makeGetWatchAgain";

export const GET = nextRouteAdapter(makeGetWatchAgain());
