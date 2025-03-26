
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Map, FileCheck, FileText, Shield, Users, ArrowUp } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      title: "Interactive Map Visualization",
      description:
        "Color-coded map showing land plots based on legal status. Search and filter by zone type.",
      icon: Map,
      color: "bg-landsecure-500",
    },
    {
      title: "AI-Powered Risk Score",
      description:
        "Uses historical dispute data and AI to predict risk levels for properties and generate Low, Medium, or High risk classification.",
      icon: ArrowUp,
      color: "bg-indigo-500",
    },
    {
      title: "Document Verification",
      description:
        "Upload and verify land documents with OCR extraction that cross-checks with government records to detect fraud.",
      icon: FileCheck,
      color: "bg-teal-500",
    },
    {
      title: "Legal Status Verification",
      description:
        "Instantly check if a property is legally registered, government-owned, or has disputes.",
      icon: Shield,
      color: "bg-amber-500",
    },
    {
      title: "Comprehensive Land Reports",
      description:
        "Generate detailed reports including ownership history, registry status, and risk analysis.",
      icon: FileText,
      color: "bg-rose-500",
    },
    {
      title: "Role-Based Access",
      description:
        "Different dashboards and permissions for regular users, government officials, and bank personnel.",
      icon: Users,
      color: "bg-emerald-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-landsecure-600 uppercase">
            Core Features
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need for land verification
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our comprehensive platform ensures transparent and secure property
            transactions with AI-powered verification tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card hover:translate-y-[-4px]"
              data-animate="true"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-wrapper">
                <div className={`feature-icon-bg ${feature.color}`}></div>
                <feature.icon className="relative w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-landsecure-600 hover:bg-landsecure-700 text-white px-8 rounded-full shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <Link to="/features">Explore All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
