import PageHeader from "../pagehader/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader headerText="Home page"  />
      <div className="bg-success d-flex justify-content-center p-5 m-5">
        <h1>Home Page</h1>
      </div>
    </>
  );
}
