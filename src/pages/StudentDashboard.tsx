
import { Card } from "@/components/ui/card";
import { PiggyBank, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjYzdjN2M3Ii8+PC9nPjwvc3ZnPg==')] opacity-5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute right-1/3 bottom-1/3 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute left-1/3 bottom-1/4 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

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
