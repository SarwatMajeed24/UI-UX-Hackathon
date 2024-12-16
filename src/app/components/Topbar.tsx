import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Topbar = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-4 sm:px-8 lg:px-16">
        <p className="text-center flex-1">
          Sign up and get 20% off your first order.
          <Link href="#" className="underline hover:text-blue-300 ml-1">
            Sign Up Now
          </Link>
        </p>
        <button className="text-white">
          <RxCross2 className="text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
