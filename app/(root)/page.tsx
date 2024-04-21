import { AccordianFAQ } from "@/components/shared/AccordianFAQ";
import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Review from "@/components/shared/Review";
import Search from "@/components/shared/Search";
import ShuffleHero from "@/components/shared/ShuffleHero";
import VideoSction from "@/components/shared/VideoSection";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 4,
  });

  return (
    <>
      <section className="bg-[#020617]  py-5 md:py-10">
        <ShuffleHero />
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <VideoSction />
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12 "
      >
        <div className="flex flex-between">
          <h2 className="h2-bold text-slate-400">Our New Events</h2>
          <Link href="/events">
            <Button>Explore More</Button>
          </Link>
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={4}
          page={page}
        />
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <Review />
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <AccordianFAQ />
      </section>
    </>
  );
}
