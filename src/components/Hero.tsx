
import { Button } from "@/components/ui/button";
import { GraduationCap, Shield, PiggyBank, Users, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-block p-2 bg-purple-100 rounded-lg">
              <GraduationCap className="h-8 w-8 text-purple-500" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800">
              Start Your Financial Journey
            </h2>
            <p className="text-xl text-gray-600">
              Learn smart money management through fun, interactive lessons designed just for you!
            </p>
          </div>
          <Button size="lg" className="bg-purple-500 hover:bg-purple-600 transform hover:scale-105 transition-all" asChild>
            <Link to="/student-login">
              <GraduationCap className="mr-2 h-5 w-5" />
              Start Learning Now
            </Link>
          </Button>
        </div>

        <div className="flex-1 space-y-6 p-6 bg-gray-50 rounded-lg text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-block p-2 bg-gray-200 rounded-lg">
              <Shield className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700">
              For Parents
            </h3>
            <p className="text-gray-600">
              Monitor and guide your child's financial education journey
            </p>
          </div>
          <Button variant="outline" size="lg" className="border-gray-300" asChild>
            <Link to="/parent-login">
              <Shield className="mr-2 h-5 w-5" />
              Parent Dashboard
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="mb-4"><PiggyBank className="h-8 w-8 text-purple-500" /></div>
          <h3 className="text-xl font-semibold mb-2">Smart Saving</h3>
          <p className="text-gray-600">Learn fundamental saving strategies and watch your money grow</p>
          <Button variant="link" className="px-0 mt-2" asChild>
            <Link to="/smart-saving">Learn more</Link>
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="mb-4"><Shield className="h-8 w-8 text-purple-500" /></div>
          <h3 className="text-xl font-semibold mb-2">Parent Oversight</h3>
          <p className="text-gray-600">Parents can monitor progress and guide financial decisions</p>
          <Button variant="link" className="px-0 mt-2" asChild>
            <Link to="/parent-oversight">Learn more</Link>
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="mb-4"><Users className="h-8 w-8 text-purple-500" /></div>
          <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
          <p className="text-gray-600">Engaging lessons and real-world financial scenarios</p>
          <Button variant="link" className="px-0 mt-2" asChild>
            <Link to="/interactive-learning">Learn more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
