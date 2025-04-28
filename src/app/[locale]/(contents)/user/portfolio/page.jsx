import { PortfolioCard } from "@/components/cards/portfolio-card";
import { AddCircleIcon } from "@/components/icons/add-circle-icon";

const PortfolioPage = () => {
  return (
    <section className="flex flex-col gap-12">
      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((info) => (
          <PortfolioCard key={info} img={`/user/portfolio-${info}.jpg`} />
        ))}
      </div>
      <button className="mt-4 mx-auto py-2.5 hover:bg-primary transition-colors duration-300 cursor-pointer border border-white rounded-full w-60 text-white flex items-center justify-center gap-2.5">
        <AddCircleIcon className="size-5 text-white" />
        <span className="font-normal">Add New Portfolio</span>
      </button>
    </section>
  );
};

export default PortfolioPage;
