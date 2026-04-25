import PageTitle from "../components/PageTitle";

// To Do / Check
// - Use GitHub API to display projects

const page = () => {
  return (
    <main className="min-h-full flex flex-col gap-12 mx-4 sm:mx-8">
      {/* DIV 1 */}
      {/* HERO SECTION */}
      <div className="">
        <PageTitle title={"Projects"} />
        <h2 className="">Some of the things I&apos;ve built.</h2>
      </div>
    </main>
  );
};

export default page;
