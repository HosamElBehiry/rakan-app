import { AskIcon } from "../icons/ask-icon";
import { FaqCard } from "../cards/faq-card";

export const UserFaqs = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2 text-primary">
        <AskIcon className="size-4" />
        <h4 className="text-sm font-bold">Frequent Asked Questions (FAQs)</h4>
      </div>
      <div className="flex flex-col gap-5">
        {[1, 2, 3, 4, 5].map((info) => (
          <FaqCard key={info} info={info} />
        ))}
      </div>
    </div>
  );
};
