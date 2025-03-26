
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Building, LandPlot } from "lucide-react";

const RoleSection = () => {
  const roles = [
    {
      id: "users",
      title: "Property Buyers & Owners",
      icon: Users,
      description:
        "For individuals looking to buy land or verify their property's legal status.",
      features: [
        "Verify land ownership and legal status",
        "Check property documents for authenticity",
        "Get AI-powered risk assessment",
        "View property history and transaction records",
        "Generate comprehensive property reports",
      ],
      cta: "Sign Up as a User",
      route: "/signup",
    },
    {
      id: "banks",
      title: "Banks & Financial Institutions",
      icon: Building,
      description:
        "For financial institutions that need to verify property before loan approvals.",
      features: [
        "Verify collateral property status before loans",
        "Check for existing mortgages or liens",
        "Receive fraud alerts and risk assessment",
        "Track property valuations and market trends",
        "Manage portfolio of property investments",
      ],
      cta: "Register as Financial Institution",
      route: "/register-bank",
    },
    {
      id: "government",
      title: "Government Officials",
      icon: LandPlot,
      description:
        "For municipal officers and government officials who manage land records.",
      features: [
        "Manage and update land registry records",
        "Resolve land disputes and verification requests",
        "Monitor illegal constructions and encroachments",
        "Generate reports on land usage and transactions",
        "Track property tax compliance",
      ],
      cta: "Government Portal Access",
      route: "/govt-access",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-landsecure-600 uppercase">
            Role-Based Access
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Tailored for different needs
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our platform provides specialized features for different stakeholders
            in the property ecosystem.
          </p>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="users" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full md:w-auto bg-gray-100 p-1 rounded-lg">
                {roles.map((role) => (
                  <TabsTrigger
                    key={role.id}
                    value={role.id}
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:text-landsecure-600 data-[state=active]:shadow-sm px-4 py-2 text-sm"
                  >
                    <role.icon className="h-4 w-4 mr-2 inline-block" />
                    <span className="hidden sm:inline">{role.title}</span>
                    <span className="sm:hidden">{role.id}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {roles.map((role) => (
              <TabsContent key={role.id} value={role.id} className="mt-0">
                <Card className="border border-gray-200 shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 bg-gradient-to-br from-landsecure-800 to-landsecure-600 text-white p-8 flex flex-col justify-center">
                      <div className="p-3 bg-white/10 rounded-full w-fit mb-6">
                        <role.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{role.title}</h3>
                      <p className="text-landsecure-100 mb-6">
                        {role.description}
                      </p>
                      <Button
                        className="bg-white hover:bg-gray-100 text-landsecure-600 mt-auto w-full sm:w-auto"
                        asChild
                      >
                        <Link to={role.route}>{role.cta}</Link>
                      </Button>
                    </div>
                    <CardContent className="p-8 md:col-span-3">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Features & Capabilities
                      </h4>
                      <ul className="space-y-4">
                        {role.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-landsecure-100 text-landsecure-600 flex items-center justify-center mt-0.5 mr-3">
                              <svg
                                className="h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default RoleSection;
