export const FinancialCard = ({ total, title }) => {
  return (
    <div className="bg-light-dark-2 rounded-xl h-28 flex flex-col items-center justify-center gap-3">
      <div className="flex gap-1.5">
        <h2 className="text-2xl text-white font-bold">{total}</h2>
        <h6 className="text-xs text-white self-end">SAR</h6>
      </div>
      <p className="text-xs text-white font-bold">{title}</p>
    </div>
  );
};
