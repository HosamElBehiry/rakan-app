import { MarketPlaceCard } from "./marketplace-card";

export const MarketCard = ({ title, data = [] }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3">
        <h4 className="font-bold text-primary">{title}</h4>
        <hr className="flex-1 brder border-primary self-end" />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data.map((info) => (
          <MarketPlaceCard key={info} img={`/user/market-${info}.jpg`} />
        ))}
      </div>
    </div>
  );
};
