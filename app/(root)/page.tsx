import SearchForm from "@/components/SearchForm";
import StartupCards from "@/components/StartupCards";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const posts = [{
    
    _id: 1,
    _createdAt: new Date(),
    view: 55,
    author: {
      name: 'Adrian',
      _id: 1
    },
    description: 'This is a description',
    image: 'https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: "Robots",
    title: "We Robots"
  }]
  return (
    <>
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
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ?
              (posts?.map((post: StartupCardType, index) => (
                <StartupCards key={post?._id} post={post} />
              ))
              ) : (
                <p className="no-results">
                  No startups found!
                </p>
              )

          }
        </ul>
      </section>
    </>
  );
}
