import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { GraduationCap, BadgeDollarSign, TrendingDown, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import Header from "@/components/Header";

const transactions = [
  { id: 1, date: "2025-04-18", description: "Saved from allowance", amount: 10, type: "income" },
  { id: 2, date: "2025-04-16", description: "Bought snacks", amount: 3.50, type: "expense" },
  { id: 3, date: "2025-04-14", description: "Birthday money", amount: 25, type: "income" },
  { id: 4, date: "2025-04-10", description: "School supplies", amount: 12.75, type: "expense" },
  { id: 5, date: "2025-04-05", description: "Saved from chores", amount: 15, type: "income" },
  { id: 6, date: "2025-04-02", description: "Movie tickets", amount: 8.50, type: "expense" },
];

const spendingData = [
  { name: "Food", amount: 45 },
  { name: "Entertainment", amount: 30 },
  { name: "Savings", amount: 75 },
  { name: "School", amount: 25 },
  { name: "Other", amount: 15 },
];

const SmartSaving = () => {
  const [timeFilter, setTimeFilter] = useState("all");
  
  const totalBalance = transactions.reduce((total, transaction) => {
    return transaction.type === "income" 
      ? total + transaction.amount 
      : total - transaction.amount;
  }, 0);

  const totalSpent = transactions
    .filter(t => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjYzdjN2M3Ii8+PC9nPjwvc3ZnPg==')] opacity-5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-1/4 top-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute left-1/3 bottom-1/3 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute right-1/3 bottom-1/4 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <Header />
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex items-center mb-6">
          <GraduationCap className="h-8 w-8 text-purple-500 mr-2" />
          <h1 className="text-3xl font-bold">Smart Saving</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BadgeDollarSign className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-3xl font-bold">${totalBalance.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingDown className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-3xl font-bold">${totalSpent.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-500">Total Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-3xl font-bold">${(totalBalance + totalSpent).toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Transaction History</CardTitle>
              <Select defaultValue={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center ${transaction.type === "income" ? "text-green-500" : "text-red-500"}`}>
                          {transaction.type === "income" ? 
                            <TrendingUp className="h-4 w-4 mr-1" /> : 
                            <TrendingDown className="h-4 w-4 mr-1" />
                          }
                          {transaction.type}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Spending Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ChartContainer
                  config={{
                    Food: { color: "#8B5CF6" },
                    Entertainment: { color: "#F97316" },
                    Savings: { color: "#10B981" },
                    School: { color: "#0EA5E9" },
                    Other: { color: "#6B7280" },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={spendingData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="amount" fill="var(--color-Food)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmartSaving;
