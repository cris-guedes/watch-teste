import { nextRouteAdapter } from "@/core/server/main/adapters/next-route-adapter";
import { makeGetFestivalCategories } from "@/core/server/domain/use-cases/categories/get-categories/makeGetFestivalCategories";

export const GET = nextRouteAdapter(makeGetFestivalCategories());
