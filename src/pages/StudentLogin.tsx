import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [parentCode, setParentCode] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student login with:", { email, password });
    navigate("/student-dashboard");
  };

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Connect to parent with code:", { email, password, parentCode });
    navigate("/student-dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Link to="/" className="p-4">
        <span className="text-gray-600 hover:text-gray-800">← Back to Home</span>
      </Link>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <GraduationCap className="w-12 h-12 mx-auto text-purple-500 mb-2" />
            <CardTitle className="text-2xl">Student Portal</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="connect">Connect to Parent</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Input 
                      type="email" 
                      placeholder="Email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      type="password" 
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
                    Login
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="connect">
                <form onSubmit={handleConnect} className="space-y-4">
                  <div className="space-y-2">
                    <Input 
                      type="email" 
                      placeholder="Email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      type="password" 
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      type="text" 
                      placeholder="Parent Connection Code" 
                      value={parentCode}
                      onChange={(e) => setParentCode(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
                    Connect to Parent
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentLogin;
