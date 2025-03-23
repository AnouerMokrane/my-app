import SubForm from "./SubForm";

export default async function Hero() {
  return (
    <section className="py-12 ">
      <div className="flex flex-col items-center px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-medium text-gray-900">Latest Blogs</h1>
        <p className="max-w-3xl text-center py-6 text-gray-700">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever.
        </p>
        <SubForm />
      </div>
    </section>
  );
}
