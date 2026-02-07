import React from "react";

const HeroSection = () => {
  return (
    <section className="px-4 pt-4">
      <div className="relative overflow-hidden rounded-xl bg-slate-900 aspect-[4/5] sm:aspect-video flex items-end">
        <img
          alt="Fashion model showcasing style"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          data-alt="Fashion model posing with elegant clothing"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQsDdpKCQr2VShn-cKYDJ8r3dztt2RWFEW3mBY-uMTngu_OS5YH3fKJq8YnA4RPibWDwaWSvU5DVVuLXy8zmKvbjpfluDxGuPNmmLFwHEul7UzBYRX9BjlFEuBakTRNIwUHBTrZIokAN_6nstlcd2jU0AzwOth9WOX8yNBiFa3pnrDLS7714L22I4AfpoaPIrXgwdCqM8FHSukIImVIFNfjvXG2GuX1xMxsZkJHiGMomsjLj3JiksaYmCeZAOCwdR7XG_9V4jQA8U"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative p-6 flex flex-col gap-3 max-w-md">
          <h2 className="text-4xl font-black text-white leading-tight">
            Elevate Your Style
          </h2>
          <p className="text-slate-200 text-sm leading-relaxed">
            Discover the latest trends in fashion and tech curated just for your
            modern lifestyle.
          </p>
          <div className="pt-2">
            <button className="bg-[#135BEC] text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wide shadow-lg shadow-primary/25 active:scale-95 transition-transform cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
