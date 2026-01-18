
import { nextRouteAdapter } from "@/core/server/main/adapters/next-route-adapter";
import { makeGetExclusiveContent } from "@/core/server/domain/use-cases/exclusive-content/get-exclusive-content/makeGetExclusiveContent";

export const GET = nextRouteAdapter(makeGetExclusiveContent());
