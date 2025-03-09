import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  console.log("searchParams:", query);
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Startup, <br /> Connect With
        Entrepreneurs
      </h1>

      <h1 className="heading">Home</h1>
      {/* Exclamation mark is like '!important' in css */}
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>
      <SearchForm query={query} />
    </section>
  );
}
