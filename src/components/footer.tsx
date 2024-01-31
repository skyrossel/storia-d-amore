import Image from "next/image";
import Menu from "@/components/menu";

const Footer = () => {
  return (
    <footer className="flex-[0_0_auto] bg-primary text-primary-foreground">
      <div className="grid grid-cols-1 gap-x-6 gap-y-3 px-4 py-4 sm:grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] md:px-8 md:py-6">
        <Menu />
        <div className="relative my-auto px-2">
          <div className="absolute left-0 top-0 h-full w-[0.3125rem] bg-primary shadow-retro" />
          <div className="overflow-hidden">
            <h6 className="animate-infinity-text text-2xl tracking-tight">
              *** Alibek be working hard too ***
            </h6>
          </div>
          <div className="absolute right-0 top-0 h-full w-[0.3125rem] bg-primary shadow-retro" />
        </div>
        <div className="flex items-center justify-center gap-x-3 md:justify-start">
          <div className="relative h-9 w-9">
            <Image
              src="/icons/clock.svg"
              alt="Clock"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-3xl tracking-tight text-[#333333] md:text-4xl">
            {new Date().toLocaleDateString()}
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
