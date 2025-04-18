
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Link to="/" className="p-4">
        <span className="text-gray-600 hover:text-gray-800">← Back to Home</span>
      </Link>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <GraduationCap className="w-12 h-12 mx-auto text-purple-500 mb-2" />
            <CardTitle className="text-2xl">Student Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Input type="email" placeholder="Email address" />
              </div>
              <div className="space-y-2">
                <Input type="password" placeholder="Password" />
              </div>
              <Button className="w-full bg-purple-500 hover:bg-purple-600">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentLogin;
