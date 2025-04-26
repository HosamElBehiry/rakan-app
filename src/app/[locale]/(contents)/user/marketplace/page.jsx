import { MarketCard } from "@/components/cards/market-card";
import { AddCircleIcon } from "@/components/icons/add-circle-icon";

const MarketPlacePage = () => {
  return (
    <section className="flex flex-col gap-12">
      <MarketCard title="Design Templates (1)" data={[1, 2, 3]} />
      <MarketCard title="Design Templates (2)" data={[4, 5, 6]} />
      <MarketCard title="Design Templates (3)" data={[7, 8, 9, 10, 11]} />
      <button className="mt-4 mx-auto py-2.5 hover:bg-primary transition-colors duration-300 cursor-pointer border border-white rounded-full w-60 text-white flex items-center justify-center gap-2.5">
        <AddCircleIcon className="size-5" />
        <span className="font-normal">Add New Templates</span>
      </button>
    </section>
  );
};

export default MarketPlacePage;
