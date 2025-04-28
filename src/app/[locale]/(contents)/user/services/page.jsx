import { ServiceCard } from "@/components/cards/service-card";
import { AddCircleIcon } from "@/components/icons/add-circle-icon";

const ServicesPage = () => {
  return (
    <section className="flex flex-col gap-12">
      <div className="grid grid-cols-3 gap-8">
        {[1, 2, 3].map((info) => (
          <ServiceCard key={info} img={`/user/service-${info}.png`} />
        ))}
      </div>
      <button className="mt-4 mx-auto py-2.5 hover:bg-primary transition-colors duration-300 cursor-pointer border border-white rounded-full w-60 text-white flex items-center justify-center gap-2.5">
        <AddCircleIcon className="size-5 text-white" />
        <span className="font-normal">Add New Service</span>
      </button>
    </section>
  );
};

export default ServicesPage;
