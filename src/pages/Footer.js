import { Facebook, Twitter, LinkedIn, Instagram } from "@/components/icons";
export const Footer = () => {
  return (
    <div className="flex gap-5 w-max-[1218px] m-auto mt-[264px] bg-red-500">
      <div className="flex flex-col gap-6 w-[289px]">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-lg font-semibold">About</p>
          <p className="text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <div className="flex flex-col gap-[4px]">
          <p className="text-zinc-900">Email : info@jstemplate.net</p>
          <p className="text-zinc-900">Phone : 880 123 456 789</p>
        </div>
      </div>
      <div className="w-[521px] flex flex-col justify-start items-center gap-2">
        <p className="flex justify-center text-zinc-500">Home</p>
        <p className="flex justify-center text-zinc-500">Blog</p>
        <p className="flex justify-center text-zinc-500">Contact</p>
      </div>
      <div className="flex flex-row w-[289px] gap-[26.67px]">
        <Facebook />
        <Twitter />
        <Instagram />
        <LinkedIn />
      </div>
    </div>
  );
};
export default Footer;
