import Card from "@/Components/Card";
import { fetchingDestinations } from "@/lib/fetching";

const DestinationsPage = async () => {
  const destinations = await fetchingDestinations();

  return (
    <div className="container mx-auto my-10">
      <h1 className="mt-10 text-6xl font-bold text-center">
        Explore All Destinations
      </h1>
      <p className="mb-10 mt-5 text-md font-semibold text-gray-500 text-center">Find your perfect travel experience from our curated collection</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
        {destinations.map((destination) => (
          <Card key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
