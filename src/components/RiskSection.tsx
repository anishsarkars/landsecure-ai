
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUp, X, Info } from "lucide-react";

const RiskSection = () => {
  const riskLevels = [
    {
      level: "Low Risk",
      description:
        "Properties with clear legal titles, proper registration, and no history of disputes.",
      color: "bg-risk-low",
      textColor: "text-risk-low",
      borderColor: "border-risk-low",
      icon: ArrowUp,
      percentage: "70%",
    },
    {
      level: "Medium Risk",
      description:
        "Properties with minor documentation issues, pending registry status or past disputes that have been resolved.",
      color: "bg-risk-medium",
      textColor: "text-risk-medium",
      borderColor: "border-risk-medium",
      icon: Info,
      percentage: "20%",
    },
    {
      level: "High Risk",
      description:
        "Properties with serious legal issues, unclear ownership, active disputes, or illegal construction status.",
      color: "bg-risk-high",
      textColor: "text-risk-high",
      borderColor: "border-risk-high",
      icon: X,
      percentage: "10%",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute -bottom-[40%] -right-[20%] w-[60%] h-[60%] rounded-full bg-gradient-radial from-landsecure-50/40 to-transparent"></div>
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] rounded-full bg-gradient-radial from-blue-50/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-landsecure-600 uppercase">
            AI Risk Assessment
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Prevent fraud with AI risk scoring
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our advanced AI algorithm analyzes multiple data points to generate a
            comprehensive risk score for any property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {riskLevels.map((risk, index) => (
            <Card
              key={index}
              className={`border-2 ${risk.borderColor} shadow-lg hover:shadow-xl transition-all overflow-hidden`}
              data-animate="true"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${risk.color} h-2 w-full`}></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-bold ${risk.textColor}`}>
                    {risk.level}
                  </h3>
                  <div className={`p-2 rounded-full ${risk.color} bg-opacity-10`}>
                    <risk.icon className={`h-5 w-5 ${risk.textColor}`} />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{risk.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Land distribution
                    </span>
                    <span className={`text-lg font-bold ${risk.textColor}`}>
                      {risk.percentage}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className={`${risk.color} h-2 rounded-full`}
                      style={{ width: risk.percentage }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our AI risk assessment helps buyers, banks, and government officials
            make informed decisions about property transactions.
          </p>
          <Button
            size="lg"
            className="bg-landsecure-600 hover:bg-landsecure-700 text-white px-8 rounded-full shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <Link to="/risk-assessment">Learn More About Risk Scoring</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
