
import React, { useState } from "react";
import { MapComponent } from "@/components";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Upload } from "lucide-react";

const DemoSection = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold tracking-wider text-landsecure-600 uppercase">
            Try It Out
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            See our platform in action
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore the features and capabilities of our land verification system
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <Tabs defaultValue="map" className="w-full">
            <div className="border-b">
              <div className="px-6 py-4">
                <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3 h-auto bg-gray-100 p-1 rounded-lg">
                  <TabsTrigger
                    value="map"
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:text-landsecure-600 data-[state=active]:shadow-sm py-2"
                  >
                    Interactive Map
                  </TabsTrigger>
                  <TabsTrigger
                    value="search"
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:text-landsecure-600 data-[state=active]:shadow-sm py-2"
                  >
                    Land Search
                  </TabsTrigger>
                  <TabsTrigger
                    value="document"
                    className="rounded-md data-[state=active]:bg-white data-[state=active]:text-landsecure-600 data-[state=active]:shadow-sm py-2"
                  >
                    Document Verification
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            <TabsContent value="map" className="m-0">
              <div className="h-[600px] w-full">
                <MapComponent />
              </div>
            </TabsContent>

            <TabsContent value="search" className="m-0">
              <div className="p-6 flex flex-col items-center">
                <div className="max-w-xl w-full">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Search Land by Address or Plot Number
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Enter an address or plot number to view ownership details, legal
                        status, and risk assessment.
                      </p>

                      <div className="flex gap-2">
                        <Input
                          placeholder="Enter address or plot number..."
                          className="flex-1"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button className="bg-landsecure-600 hover:bg-landsecure-700 text-white">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>

                      <div className="mt-8 text-center">
                        <img
                          src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+0ea5e9(78.9629,20.5937)/78.9629,20.5937,12,0/500x300?access_token=pk.eyJ1IjoiYW5pc2hzYXJrYXJzIiwiYSI6ImNtOG54YnJjZjA1a3Eya29zaGc3YWc2bXkifQ.qMgKYko3eUlWJGTx-fi5sQ"
                          alt="Land location preview"
                          className="rounded-lg shadow-md mx-auto"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Enter a location to see detailed information
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="document" className="m-0">
              <div className="p-6 flex flex-col items-center">
                <div className="max-w-xl w-full">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Verify Document Authenticity
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Upload property documents to verify their authenticity against
                        government records using our AI-powered system.
                      </p>

                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                        <div className="mx-auto flex flex-col items-center">
                          <div className="h-12 w-12 bg-landsecure-50 rounded-full flex items-center justify-center text-landsecure-600 mb-4">
                            <Upload className="h-6 w-6" />
                          </div>
                          <p className="text-gray-600">
                            Drag and drop your document here, or click to browse
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Support PDF, JPG, PNG up to 10MB
                          </p>
                          <Button
                            variant="outline"
                            className="mt-4 border-landsecure-600 text-landsecure-600"
                          >
                            Select Document
                          </Button>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button
                          className="w-full bg-landsecure-600 hover:bg-landsecure-700 text-white"
                          disabled
                        >
                          Verify Document
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
