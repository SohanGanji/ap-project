
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <GraduationCap className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold text-gray-800">FinanceWise</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
