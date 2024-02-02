import { Logo } from "../components/icons";
import { Search } from "../components/icons";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="w-[1280px] flex items-center justify-start py-[32px] bg-white m-auto">
      <div className="justify-start items-start gap-[118px] inline-flex">
        <Logo />
        <div className="justify-start items-center gap-[21px] flex">
          <div className="w-[667px] justify-center items-center gap-10 flex text-zinc-700">
            <button
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </button>
            <button
              onClick={() => {
                router.push("/allblog");
              }}
            >
              Blog
            </button>
            <button>Contact</button>
          </div>
          <div className="bg-zinc-100 rounded-md px-[16px] py-[8px] gap-[12px] items-center flex">
            <input placeholder="Search" className="bg-zinc-100" />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
