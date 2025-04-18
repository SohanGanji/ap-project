
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 text-center">
      <div className="flex items-center justify-center text-sm text-gray-600">
        <Copyright className="mr-2 h-4 w-4" />
        <span>2025 FinanceWise. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
