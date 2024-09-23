import Image from "next/image";

const Header = () => {
  return (
    <div className=" ml-2 mt-2 items-center justify-center rounded-xl bg-gray-100">
      <a href="https://github.com/Ki55n/Data-Fusion"  rel="data" >
      <img className="flex rounded-xl cursor-pointer h-24 w-28 top-4 left-4" alt="logo" src="/img/Fusion_logo.png"/>
      </a>
      </div>
  );
};

export default Header;
