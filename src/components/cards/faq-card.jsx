import { useState } from "react";
import { ArrowIcon } from "../icons/arrow-icon";

export const FaqCard = ({ info }) => {
  const [active, setActive] = useState(false);
  return (
    <article>
      <div
        onClick={() => setActive(!active)}
        className="flex cursor-pointer items-center text-white justify-between bg-dark rounded-t-2xl p-5"
      >
        <h5 className="text-sm font-bold">
          {info}. What payment methods do you accept?
        </h5>
        <ArrowIcon
          className={`size-3 transition-all duration-300 ${
            active ? "rotate-180" : "rotate-90"
          }`}
        />
      </div>
      {active ? (
        <p className="p-5 text-sm leading-6 rounded-b-2xl bg-light-dark-1 text-white">
          I worked with this freelancer on a project. The results were decent
          and met some of my expectations. However, the communication could have
          been faster and more clear. Overall, the work was acceptable but not
          outstanding. Would consider working with them again with more
          clarification upfront.
        </p>
      ) : null}
    </article>
  );
};
