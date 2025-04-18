
import { Button } from "@/components/ui/button";
import { GraduationCap, PiggyBank, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Learn Smart Money Management
        <br />
        Under Safe Guidance
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        A safe and engaging platform where students can learn about finances with
        parental oversight and guidance.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button size="lg" className="bg-purple-500 hover:bg-purple-600" asChild>
          <Link to="/student-login">
            <GraduationCap className="mr-2 h-5 w-5" />
            Start Learning
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link to="/parent-login">
            <Shield className="mr-2 h-5 w-5" />
            Parent Dashboard
          </Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-left">
        <FeatureCard
          icon={<PiggyBank className="h-8 w-8 text-purple-500" />}
          title="Smart Saving"
          description="Learn fundamental saving strategies and watch your money grow"
        />
        <FeatureCard
          icon={<Shield className="h-8 w-8 text-purple-500" />}
          title="Parent Oversight"
          description="Parents can monitor progress and guide financial decisions"
        />
        <FeatureCard
          icon={<Users className="h-8 w-8 text-purple-500" />}
          title="Interactive Learning"
          description="Engaging lessons and real-world financial scenarios"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Hero;
