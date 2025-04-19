import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" })
});

const registerSchema = z.object({
  parentEmail: z.string().email({ message: "Invalid email address" }),
  parentPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
  childName: z.string().min(2, { message: "Child name must be at least 2 characters" }),
  childEmail: z.string().email({ message: "Invalid email address" }),
  childPassword: z.string().min(6, { message: "Password must be at least 6 characters" })
});

const ParentLogin = () => {
  const navigate = useNavigate();
  
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      parentEmail: "",
      parentPassword: "",
      childName: "",
      childEmail: "",
      childPassword: ""
    }
  });

  const onLogin = (values: z.infer<typeof loginSchema>) => {
    console.log("Login values:", values);
    navigate("/parent-oversight");
  };

  const onRegister = (values: z.infer<typeof registerSchema>) => {
    console.log("Register values:", values);
    navigate("/parent-oversight");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Link to="/" className="p-4">
        <span className="text-gray-600 hover:text-gray-800">← Back to Home</span>
      </Link>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-xl">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 mx-auto text-purple-500 mb-2" />
            <CardTitle className="text-2xl">Parent Portal</CardTitle>
            <CardDescription>Login or register to manage your child's account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
                      Login
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="register">
                <Form {...registerForm}>
                  <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-700">Parent Information</h3>
                      <FormField
                        control={registerForm.control}
                        name="parentEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter parent email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="parentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Enter parent password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium text-gray-700">Child Information</h3>
                      <FormField
                        control={registerForm.control}
                        name="childName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Child's Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter child's name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="childEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Child's Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter child's email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="childPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Child's Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Enter child's password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600">
                      Register
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ParentLogin;
