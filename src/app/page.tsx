import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const data = await client.fetch(`*[_type == 'showroom']`);
  console.log(data);

  return (
    <div className="min-h-screen bg-gray-200 py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-12">
        Premium Cars Showroom
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-7xl mx-auto">
        {data.map(
          (
            showroom: {
              name: string;
              description: string;
              price: number;
              image: { asset: { _ref: string } };
            },
            i: number
          ) => {
            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                {/* Enlarged Image */}
                {showroom.image?.asset && (
                  <img
                    src={urlFor(showroom.image).url()}
                    alt={showroom.name}
                    className="w-full h-80 object-cover transition-all duration-300 transform hover:scale-105"
                  />
                )}

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-indigo-600 transition-colors duration-300">
                    {showroom.name}
                  </h2>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    {showroom.description}
                  </p>
                  <p className="text-2xl font-semibold text-gray-800">
                    Price: <span className="font-bold">${showroom.price}</span>
                  </p>
                </div>
              </div>
            );
          }
        )}
      </section>
    </div>
  );
}
