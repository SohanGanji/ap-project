
import { Button } from "@/components/ui/button";
import { GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold text-gray-800">FinanceWise</span>
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link to="/student-login">Student Login</Link>
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600" asChild>
            <Link to="/parent-login">Parent Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
