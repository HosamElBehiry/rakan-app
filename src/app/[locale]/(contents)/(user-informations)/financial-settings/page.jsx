import { FinancialRecharts } from "@/components/profile/financial-recharts";
import { FinancialCard } from "@/components/cards/financial-card";
import { RevenueIcon } from "@/components/icons/revenue-icon";
import { WalletIcon } from "@/components/icons/wallet-icon";
import { ArrowIcon } from "@/components/icons/arrow-icon";

const FinancialSettingsPage = () => {
  return (
    <section className="flex-1 bg-light-dark-1 py-9 px-6.5 rounded-3xl flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RevenueIcon className="text-white size-4" />
            <h4 className="font-bold text-white">Total Revenue </h4>
          </div>
          <div className="px-3 py-2.5 cursor-pointer bg-light-dark-2 rounded-md flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-white">01 Jan 2024</span>
              <span className="text-white"> - </span>
              <span className="text-xs text-white">09 Sept 2024</span>
            </div>
            <ArrowIcon className="text-white size-2.5 rotate-90" />
          </div>
        </div>
        <FinancialRecharts />
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <WalletIcon className="text-white size-4" />
            <h4 className="font-bold text-white">My Wallet </h4>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <FinancialCard total="1250" title="Total Balance" />
            <FinancialCard total="250" title="Available Balance" />
            <FinancialCard total="700" title="Pending Balance" />
            <FinancialCard total="300" title="Awaiting Withdrawal" />
          </div>
          <div className="mt-2 flex items-center gap-5 justify-end">
            <button className="w-32 cursor-pointer py-2.5 rounded-full border border-primary hover:bg-primary text-white">
              Top Up
            </button>
            <button className="w-32 cursor-pointer py-2.5 rounded-full border bg-primary hover:bg-primary/70 border-primary text-white">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSettingsPage;
