
import { nextRouteAdapter } from "@/core/server/main/adapters/next-route-adapter";
import { makeGetHighlights } from "@/core/server/domain/use-cases/banners/get-highlights/makeGetHighlights";

export const GET = nextRouteAdapter(makeGetHighlights());
