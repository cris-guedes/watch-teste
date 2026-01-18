"use client";

import React from "react";
import { Footer } from "@/core/client/components/festival/Footer";
import { Hero } from "@/core/client/components/festival/Header/Hero";
import { useAppContext } from "@/core/client/hooks/app/useAppContext";
import {
  LineUpSection,
  FestivalForYouSection,
  InLiveSection,
  PromoBanner,
  ShowsSection,
  ExclusiveContentSection
} from "@/core/client/components/festival/Sections";

export default function Home() {
  const { artists, banners, shows, categories, exclusive } = useAppContext();

  const { data: highlights } = banners.getHighlights();
  const { data: ads } = banners.getAds();
  const { data: lineup } = artists.getLineUp();
  const { data: liveShows } = shows.getLiveShows();
  const { data: yesterdayShows } = shows.getYesterdaysShows();
  const { data: watchAgain } = shows.getWatchAgain();
  const { data: festivalCategories } = categories.getFestivalCategories();
  const { data: exclusiveContent } = exclusive.getExclusiveContent();

  const mainHero = highlights?.find(b => b.type === 'HERO');
  const heinekenAd = ads?.find(b => b.id === 'b2');
  const cocaColaAd = ads?.find(b => b.id === 'b3');

  const rockSingers = lineup

  return (
    <div className="space-y-12 overflow-x-hidden pb-16">
      {mainHero && (
        <Hero
          title={mainHero.title}
          subtitle={mainHero.subtitle}
          backgroundImage={mainHero.mediaUrl}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 space-y-20">
        <LineUpSection lineup={lineup} ad={ads?.find(b => b.id === 'b4')} />

        <FestivalForYouSection categories={festivalCategories} ad={ads?.find(b => b.id === 'b5')} />

        <PromoBanner ad={heinekenAd} alt="Heineken Ad" />

        <InLiveSection shows={liveShows} />

        <ShowsSection title="Yesterday Shows" href="/yesterday" shows={yesterdayShows} variant="portrait" />

        <ExclusiveContentSection content={exclusiveContent} ad={ads?.find(b => b.id === 'b6')} />

        <ShowsSection title="Rock Singers" artists={rockSingers} variant="portrait" />

        <PromoBanner ad={cocaColaAd} alt="Coca-Cola Ad" />

        <ShowsSection
          title="Watch Again"
          href="/watch-again"
          shows={watchAgain}
          variant="portrait"
          ad={ads?.[5] ? {
            imageUrl: ads[5].mediaUrl,
            span: 2,
            aspectRatio: "aspect-[6.33/4.2]"
          } : undefined}
        />
      </div>

      <Footer />
    </div>
  );
}
