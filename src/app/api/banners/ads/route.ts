
import { nextRouteAdapter } from "@/core/server/main/adapters/next-route-adapter";
import { makeGetAds } from "@/core/server/domain/use-cases/banners/get-ads/makeGetAds";

export const GET = nextRouteAdapter(makeGetAds());
