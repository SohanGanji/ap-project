
import { Card } from "@/components/ui/card";
import { PiggyBank, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 to-blue-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-purple-500" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Welcome Back!
            </h1>
          </div>
          
          <p className="text-gray-600 mb-12 text-lg">
            Choose what you'd like to explore today
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/smart-saving" className="group">
              <Card className="p-8 bg-white/50 backdrop-blur-sm border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                    <PiggyBank className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">Smart Saving</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Track your savings and learn essential money management skills for a brighter financial future.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/interactive-learning" className="group">
              <Card className="p-8 bg-white/50 backdrop-blur-sm border-purple-100 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">Interactive Learning</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Discover exciting financial lessons through engaging interactive content and activities.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
