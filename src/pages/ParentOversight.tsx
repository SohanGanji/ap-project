
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Shield, BadgeDollarSign, Layers } from "lucide-react";
import Header from "@/components/Header";

const spendingData = [
  { id: 1, date: "2025-04-18", category: "Food", amount: 3.50 },
  { id: 2, date: "2025-04-10", category: "School", amount: 12.75 },
  { id: 3, date: "2025-04-02", category: "Entertainment", amount: 8.50 },
];

const learningData = [
  { id: 1, module: "Introduction to Money", progress: 100, completedOn: "2025-04-10" },
  { id: 2, module: "Saving Basics", progress: 75, completedOn: null },
  { id: 3, module: "Smart Spending", progress: 30, completedOn: null },
  { id: 4, module: "Budgeting", progress: 0, completedOn: null },
];

const ParentOversight = () => {
  // Calculate total spent
  const totalSpent = spendingData.reduce((total, item) => total + item.amount, 0);
  
  // Calculate overall learning progress
  const overallProgress = Math.round(
    learningData.reduce((sum, module) => sum + module.progress, 0) / learningData.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-bl from-purple-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjYzdjN2M3Ii8+PC9nPjwvc3ZnPg==')] opacity-5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute left-1/3 top-1/3 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute right-1/3 top-1/4 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Shield className="h-8 w-8 text-purple-500 mr-2" />
          <h1 className="text-3xl font-bold">Parent Oversight</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BadgeDollarSign className="h-5 w-5 mr-2 text-purple-500" />
                Spending Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Total Spent</span>
                  <span className="font-bold">${totalSpent.toFixed(2)}</span>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {spendingData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>${item.amount.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="h-5 w-5 mr-2 text-purple-500" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="font-bold">{overallProgress}%</span>
                </div>
                <Progress value={overallProgress} className="h-2 mb-6" />
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Module</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {learningData.map((module) => (
                      <TableRow key={module.id}>
                        <TableCell>{module.module}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={module.progress} className="h-2 w-full" />
                            <span className="w-10 text-xs">{module.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {module.completedOn ? (
                            <span className="text-green-500">Completed on {module.completedOn}</span>
                          ) : module.progress > 0 ? (
                            <span className="text-yellow-500">In Progress</span>
                          ) : (
                            <span className="text-gray-500">Not Started</span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParentOversight;
