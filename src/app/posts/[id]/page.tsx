export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">Test Title</h1>
      <p className="max-w-[700px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ex nostrum corrupti illum
        corporis quam cum ipsum veritatis voluptates architecto iusto, fugiat perferendis doloribus.
        Similique veniam aperiam aliquam delectus veritatis pariatur aliquid, eligendi id quibusdam
        porro nisi nostrum odio provident sunt illo tempora aspernatur.
      </p>
    </main>
  );
}
