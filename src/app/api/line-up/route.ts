
import { nextRouteAdapter } from "@/core/server/main/adapters/next-route-adapter";
import { makeGetLineUp } from "@/core/server/domain/use-cases/artists/get-line-up/makeGetLineUp";

export const GET = nextRouteAdapter(makeGetLineUp());
