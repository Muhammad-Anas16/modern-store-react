import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "./../tenStack/fakeStoreApi";

const Cetagory = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  if (!data) {
    console.log("Data Not Found!");
  }

  const allCategories = data?.map((item) => item.category);

  console.log("allCategories => ", allCategories);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-4">
        <h3 className="text-lg font-bold tracking-tight">Browse Categories</h3>
        <button className="text-primary text-xs font-semibold">View All</button>
      </div>
      <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar">
        <div className="flex flex-col items-center gap-2 group shrink-0">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-active:scale-90 transition-transform">
            <span className="material-symbols-outlined">devices</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
            Electronics
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group shrink-0">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">diamond</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
            Jewelry
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group shrink-0">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">man</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
            Men's
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group shrink-0">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">woman</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
            Women's
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 group shrink-0">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
            <span className="material-symbols-outlined">watch</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
            Accessories
          </span>
        </div>
      </div>
    </section>
  );
};

export default Cetagory;
