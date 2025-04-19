
import { Card } from "@/components/ui/card";
import { PiggyBank, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome Back!</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/smart-saving">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4">
                <PiggyBank className="h-12 w-12 text-purple-500" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Smart Saving</h2>
                  <p className="text-gray-600">Track your savings and learn money management</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/interactive-learning">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-4">
                <Users className="h-12 w-12 text-purple-500" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Interactive Learning</h2>
                  <p className="text-gray-600">Learn through engaging financial lessons</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
