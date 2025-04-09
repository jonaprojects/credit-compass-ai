
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertTriangle,
  BarChart3,
  ShieldCheck,
  Download
} from 'lucide-react';
import FeaturesComponent from '@/components/Features';

const Features = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [previewData, setPreviewData] = useState<string[][]>([]);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (selectedFile) {
      // Check if file is CSV
      if (selectedFile.type !== 'text/csv' && !selectedFile.name.endsWith('.csv')) {
        toast({
          title: "Invalid file format",
          description: "Please upload a CSV file",
          variant: "destructive",
        });
        return;
      }
      
      setFile(selectedFile);
      setIsComplete(false);
      
      // Read and preview the CSV
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const data = lines.slice(0, 5).map(line => line.split(','));
        setPreviewData(data);
      };
      reader.readAsText(selectedFile);
    }
  };
  
  const processData = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a CSV file first",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Create dummy results
      const mockResults = {
        overallRiskScore: 72,
        fraudProbability: 0.08,
        approvalRecommendation: "Approve",
        riskFactors: [
          { factor: "Income Verification", score: 85 },
          { factor: "Credit History", score: 68 },
          { factor: "Alternative Data", score: 76 },
          { factor: "Fraud Indicators", score: 92 }
        ],
        insights: [
          "Applicant shows strong payment patterns on utility bills",
          "Mobile usage data indicates stability",
          "Some minor inconsistencies in reported income",
          "Low probability of fraudulent application"
        ],
        inclusionScore: 78,
        socialImpact: "Medium-High"
      };
      
      setResults(mockResults);
      setIsProcessing(false);
      setIsComplete(true);
      
      toast({
        title: "Analysis Complete",
        description: "Credit assessment has been successfully processed",
      });
    }, 3000);
  };
  
  const resetDemo = () => {
    setFile(null);
    setPreviewData([]);
    setResults(null);
    setIsComplete(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Experience the <span className="gradient-text">Power</span> of AI-Driven Credit Assessment
              </h1>
              <p className="text-xl text-gray-600">
                Upload your sample data to see how our AI instantly evaluates credit risk while 
                promoting financial inclusion.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
              {!isComplete ? (
                <div className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <FileText className="text-brand-purple" />
                      Upload Your Data
                    </h2>
                    <p className="text-gray-600">
                      Upload a CSV file containing credit application data. Our AI will analyze it 
                      and provide comprehensive credit risk assessment.
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Input 
                        id="csvFile" 
                        type="file" 
                        accept=".csv" 
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label 
                        htmlFor="csvFile" 
                        className="cursor-pointer flex flex-col items-center justify-center gap-3"
                      >
                        <div className="bg-brand-purple/10 p-4 rounded-full">
                          <Upload className="h-8 w-8 text-brand-purple" />
                        </div>
                        <span className="text-lg font-medium text-gray-700">
                          {file ? file.name : "Click to upload a CSV file"}
                        </span>
                        <span className="text-sm text-gray-500 max-w-md mx-auto">
                          Upload your sample credit data with fields like income, payment history, 
                          employment status, and other relevant factors
                        </span>
                      </label>
                    </div>
                    
                    {previewData.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-lg font-medium mb-3 flex items-center">
                          <FileText className="mr-2 h-5 w-5 text-brand-purple" />
                          CSV Preview (first 5 rows)
                        </h3>
                        <div className="overflow-x-auto bg-gray-50 rounded-lg border border-gray-200">
                          <table className="min-w-full">
                            <thead>
                              <tr>
                                {previewData[0]?.map((header, i) => (
                                  <th key={i} className="py-3 px-4 border-b text-left text-sm font-medium text-gray-700 bg-gray-100">
                                    {header || `Column ${i+1}`}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {previewData.slice(1).map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                  {row.map((cell, j) => (
                                    <td key={j} className="py-2 px-4 border-b text-sm text-gray-700">
                                      {cell || "-"}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-brand-purple hover:bg-brand-purple/90 h-12"
                        onClick={processData}
                        disabled={!file || isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <span className="animate-spin mr-2">
                              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </span>
                            Processing...
                          </>
                        ) : (
                          <>Run AI Credit Assessment</>
                        )}
                      </Button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Note: This is a demo. No actual data will be stored or processed beyond this demonstration.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                      <BarChart3 className="text-brand-purple" />
                      Credit Assessment Results
                    </h2>
                    <Button variant="outline" size="sm" onClick={resetDemo}>
                      Start New Analysis
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Risk Score */}
                    <div className="bg-white border rounded-xl shadow-sm p-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Overall Risk Score</h3>
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold">{results.overallRiskScore}</span>
                        <span className="text-sm text-gray-500">/100</span>
                      </div>
                      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            results.overallRiskScore > 70 ? 'bg-green-500' : 
                            results.overallRiskScore > 50 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${results.overallRiskScore}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Fraud Assessment */}
                    <div className="bg-white border rounded-xl shadow-sm p-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Fraud Probability</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-4xl font-bold">
                          {(results.fraudProbability * 100).toFixed(1)}%
                        </span>
                        <ShieldCheck className={`h-6 w-6 ${
                          results.fraudProbability < 0.15 ? 'text-green-500' : 
                          results.fraudProbability < 0.3 ? 'text-yellow-500' : 'text-red-500'
                        }`} />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {results.fraudProbability < 0.15 ? 'Low fraud risk' : 
                         results.fraudProbability < 0.3 ? 'Medium fraud risk' : 'High fraud risk'}
                      </p>
                    </div>
                    
                    {/* Recommendation */}
                    <div className="bg-white border rounded-xl shadow-sm p-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">Recommendation</h3>
                      <div className="flex items-center gap-2">
                        {results.approvalRecommendation === "Approve" ? (
                          <>
                            <CheckCircle2 className="h-6 w-6 text-green-500" />
                            <span className="text-2xl font-bold text-green-500">Approve</span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="h-6 w-6 text-red-500" />
                            <span className="text-2xl font-bold text-red-500">Decline</span>
                          </>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Based on risk profile and inclusion factors
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Risk Factors */}
                    <div className="bg-white border rounded-xl shadow-sm p-6">
                      <h3 className="text-lg font-medium mb-4">Risk Factors</h3>
                      <div className="space-y-4">
                        {results.riskFactors.map((factor: any, i: number) => (
                          <div key={i}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium">{factor.factor}</span>
                              <span className="text-sm font-medium">{factor.score}/100</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  factor.score > 70 ? 'bg-green-500' : 
                                  factor.score > 50 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${factor.score}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* AI Insights */}
                    <div className="bg-white border rounded-xl shadow-sm p-6">
                      <h3 className="text-lg font-medium mb-4">AI Insights</h3>
                      <ul className="space-y-2">
                        {results.insights.map((insight: string, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-brand-purple">•</span>
                            <span className="text-sm">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-medium mb-3">Social Impact Assessment</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-700 mb-1">Inclusion Score</p>
                        <div className="flex items-end gap-2">
                          <span className="text-3xl font-bold">{results.inclusionScore}</span>
                          <span className="text-sm text-gray-500">/100</span>
                        </div>
                        <div className="mt-2 h-2 bg-white/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-brand-purple rounded-full"
                            style={{ width: `${results.inclusionScore}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700 mb-1">Social Impact</p>
                        <div className="bg-white/50 rounded-lg p-3 inline-block">
                          <span className="text-lg font-semibold text-brand-purple">{results.socialImpact}</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          This application would contribute positively to financial inclusion goals
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="bg-brand-purple hover:bg-brand-purple/90" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Report
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <FeaturesComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
