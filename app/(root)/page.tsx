import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import ShuffleHero from "@/components/shared/ShuffleHero";
import { Button } from "@/components/ui/button";
import { getAllEvents, getFourEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page: number = Number(searchParams?.page) || 1;
  const searchText: string = (searchParams?.query as string) || "";
  const category: string = (searchParams?.category as string) || "";

  const events = await getFourEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-[#020617]  py-5 md:py-10">
        <ShuffleHero />
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <div className="flex flex-between">
          <h2 className="h2-bold">Our New Events</h2>
          <Link href="/events">
            <Button>Explore More</Button>
          </Link>
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}


