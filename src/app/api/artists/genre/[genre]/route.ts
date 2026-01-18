
import { nextRouteAdapter } from "@/core/server/main/adapters/next-route-adapter";
import { makeGetArtistsByGenre } from "@/core/server/domain/use-cases/artists/get-artists-by-genre/makeGetArtistsByGenre";

export const GET = nextRouteAdapter(makeGetArtistsByGenre());
