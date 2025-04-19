
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Users, Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

// Video playlist data
const playlists = [
  {
    id: 1,
    title: "Introduction to Money",
    description: "Learn the basics of money and currency",
    progress: 75,
    videos: [
      { id: 1, title: "What is Money?", duration: "5:23", completed: true },
      { id: 2, title: "History of Currency", duration: "7:45", completed: true },
      { id: 3, title: "Modern Banking", duration: "6:12", completed: false },
      { id: 4, title: "Digital Currency", duration: "8:30", completed: false },
    ]
  },
  {
    id: 2,
    title: "Saving Basics",
    description: "Essential knowledge for growing your money",
    progress: 25,
    videos: [
      { id: 1, title: "Why Save Money?", duration: "4:15", completed: true },
      { id: 2, title: "Setting Savings Goals", duration: "6:30", completed: false },
      { id: 3, title: "Interest and Growth", duration: "7:20", completed: false },
      { id: 4, title: "Different Types of Savings", duration: "5:45", completed: false },
    ]
  },
  {
    id: 3,
    title: "Smart Spending",
    description: "Make wise decisions with your money",
    progress: 0,
    videos: [
      { id: 1, title: "Needs vs. Wants", duration: "5:10", completed: false },
      { id: 2, title: "Budgeting Basics", duration: "8:15", completed: false },
      { id: 3, title: "Smart Shopping Tips", duration: "6:40", completed: false },
      { id: 4, title: "Avoiding Impulse Purchases", duration: "5:50", completed: false },
    ]
  }
];

const InteractiveLearning = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0].id);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  
  const currentPlaylist = playlists.find(playlist => playlist.id === selectedPlaylist);
  const currentVideo = currentPlaylist?.videos.find(video => video.id === selectedVideo);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Users className="h-8 w-8 text-purple-500 mr-2" />
          <h1 className="text-3xl font-bold">Interactive Learning</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Learning Modules</CardTitle>
                <CardDescription>
                  Select a module to start learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {playlists.map(playlist => (
                    <div 
                      key={playlist.id} 
                      className={`p-4 rounded-lg cursor-pointer transition-colors ${
                        selectedPlaylist === playlist.id 
                          ? 'bg-purple-100 border border-purple-200' 
                          : 'bg-white border hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedPlaylist(playlist.id)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{playlist.title}</h3>
                        <span className="text-sm text-gray-500">{playlist.progress}%</span>
                      </div>
                      <Progress value={playlist.progress} className="h-2 mb-2" />
                      <p className="text-sm text-gray-600">{playlist.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{currentPlaylist?.title}</CardTitle>
                <CardDescription>{currentPlaylist?.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                {selectedVideo ? (
                  <div className="space-y-4">
                    <div className="bg-purple-900 aspect-video rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center text-white">
                        <Play className="h-16 w-16 mx-auto mb-2" />
                        <h3 className="text-xl font-semibold">{currentVideo?.title}</h3>
                        <p className="text-purple-300">Duration: {currentVideo?.duration}</p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button 
                        variant="outline"
                        onClick={() => setSelectedVideo(null)}
                      >
                        Back to Playlist
                      </Button>
                      <Button className="bg-purple-500 hover:bg-purple-600">
                        Mark as Completed
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-gray-600 mb-4">Select a video to start learning</p>
                    
                    <div className="space-y-2">
                      {currentPlaylist?.videos.map(video => (
                        <div 
                          key={video.id}
                          className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                          onClick={() => setSelectedVideo(video.id)}
                        >
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                            <Play className="h-5 w-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{video.title}</h4>
                            <p className="text-sm text-gray-500">Duration: {video.duration}</p>
                          </div>
                          {video.completed ? (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Completed
                            </span>
                          ) : (
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                              Not completed
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex">
                        <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-blue-700">Learning Tips</h4>
                          <p className="text-sm text-blue-600">
                            Complete all videos in a module to unlock the next level. Your progress 
                            is automatically saved and visible to your parents to track your learning journey.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveLearning;
