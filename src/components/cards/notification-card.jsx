export const NotificationCard = () => {
  return (
    <div className="p-5 bg-light-dark-2 rounded-xl flex flex-col gap-3.5">
      <div className="flex items-center justify-between">
        <h5 className="text-white font-bold">New Job Matches</h5>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-1 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
        </label>
      </div>
      <p className="text-white/70 text-sm">
        Get alerts about jobs that match your skills and preferences
      </p>
    </div>
  );
};
