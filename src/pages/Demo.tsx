import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, FileText, CheckCircle2, AlertCircle, AlertTriangle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Define types for the API response
interface CreditAssessmentResponse {
  loan_status_binary: number;
  delinq_flag: number;
  dti_class: number;
  revol_util_class: number;
  annual_inc_class: number;
  final_status: number;
}

// Fallback data in case the API request fails
const fallbackData: CreditAssessmentResponse = {
  loan_status_binary: 1,
  delinq_flag: 0,
  dti_class: 1,
  revol_util_class: 2,
  annual_inc_class: 1,
  final_status: 1
};

const Demo = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [previewData, setPreviewData] = useState<string[][]>([]);
  const [results, setResults] = useState<CreditAssessmentResponse | null>(null);
  const [serverWarning, setServerWarning] = useState(false);
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
      setResults(null);
      setServerWarning(false);
      
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
  
  const processData = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a CSV file first",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // Create form data to send the file
      const formData = new FormData();
      formData.append('file', file);
      
      // Make API request
      const response = await fetch('http://127.0.0.1:8000/customer/1', {
        method: 'POST',
        body: formData,
      });
      
      let assessmentData: CreditAssessmentResponse;
      
      if (response.ok) {
        assessmentData = await response.json();
        toast({
          title: "Analysis Complete",
          description: "Credit assessment has been successfully processed",
        });
      } else {
        // If API request fails, use fallback data
        console.error('API request failed, using fallback data');
        assessmentData = fallbackData;
        setServerWarning(true);
      }
      
      setResults(assessmentData);
      setIsComplete(true);
    } catch (error) {
      console.error('Error processing data:', error);
      // Use fallback data in case of error
      setResults(fallbackData);
      setIsComplete(true);
      setServerWarning(true);
    } finally {
      setIsProcessing(false);
    }
  };
  
  const resetDemo = () => {
    setFile(null);
    setPreviewData([]);
    setResults(null);
    setIsComplete(false);
    setServerWarning(false);
  };

  // Helper function to convert numeric class to text representation
  const getClassText = (classValue: number): string => {
    switch (classValue) {
      case 0: return 'Low';
      case 1: return 'Medium';
      case 2: return 'High';
      default: return 'Unknown';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Try Credit Advisor <span className="gradient-text">Demo</span>
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
                      <Label 
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
                      </Label>
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
                      <AlertCircle className="text-brand-purple" />
                      Credit Assessment Results
                    </h2>
                    <Button variant="outline" size="sm" onClick={resetDemo}>
                      Start New Analysis
                    </Button>
                  </div>
                  
                  {serverWarning && (
                    <Alert className="bg-yellow-50 border-yellow-200 mb-6">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <AlertDescription className="text-yellow-700">
                        Warning: Unable to access the server at the moment. Please try again later.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  {results && (
                    <div className="space-y-8">
                      {/* Final Recommendation */}
                      <div className="bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-4">AI Recommendation</h3>
                        <div className="flex items-center gap-3">
                          {results.final_status === 1 ? (
                            <>
                              <div className="bg-green-100 p-3 rounded-full">
                                <CheckCircle2 className="h-8 w-8 text-green-600" />
                              </div>
                              <div>
                                <p className="text-2xl font-bold text-green-600">Approve Loan</p>
                                <p className="text-gray-600">The AI model recommends approving this loan application.</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="bg-red-100 p-3 rounded-full">
                                <AlertCircle className="h-8 w-8 text-red-600" />
                              </div>
                              <div>
                                <p className="text-2xl font-bold text-red-600">Decline Loan</p>
                                <p className="text-gray-600">The AI model recommends declining this loan application.</p>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Assessment Details */}
                      <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <h3 className="text-lg font-semibold mb-4">Assessment Details</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center border-b pb-3">
                            <span className="text-gray-600">Loan Status:</span>
                            <span className={`font-medium ${results.loan_status_binary === 1 ? 'text-green-600' : 'text-red-600'}`}>
                              {results.loan_status_binary === 1 ? 'Approval Recommended' : 'Denial Recommended'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center border-b pb-3">
                            <span className="text-gray-600">Delinquency Risk:</span>
                            <span className={`font-medium ${results.delinq_flag === 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {results.delinq_flag === 0 ? 'Low Risk' : 'High Risk'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center border-b pb-3">
                            <span className="text-gray-600">Debt-to-Income Ratio:</span>
                            <span className={`font-medium ${
                              results.dti_class === 0 ? 'text-green-600' : 
                              results.dti_class === 1 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {getClassText(results.dti_class)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center border-b pb-3">
                            <span className="text-gray-600">Revolver Utilization:</span>
                            <span className={`font-medium ${
                              results.revol_util_class === 0 ? 'text-green-600' : 
                              results.revol_util_class === 1 ? 'text-yellow-600' : 'text-red-600'
                            }`}>
                              {getClassText(results.revol_util_class)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center border-b pb-3">
                            <span className="text-gray-600">Annual Income:</span>
                            <span className={`font-medium ${
                              results.annual_inc_class === 0 ? 'text-red-600' : 
                              results.annual_inc_class === 1 ? 'text-yellow-600' : 'text-green-600'
                            }`}>
                              {getClassText(results.annual_inc_class)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Explanation */}
                      <div className="bg-white rounded-xl shadow-sm p-6 border">
                        <h3 className="text-lg font-semibold mb-3">Understanding This Assessment</h3>
                        <p className="text-gray-600 mb-4">
                          This assessment is generated using advanced machine learning algorithms that analyze various 
                          aspects of the applicant's financial profile.
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2">
                          <li><span className="font-medium">Loan Status:</span> Indicates whether the applicant meets basic criteria for approval.</li>
                          <li><span className="font-medium">Delinquency Risk:</span> Evaluates the likelihood of missed payments.</li>
                          <li><span className="font-medium">Debt-to-Income Ratio:</span> Measures income used for debt payments.</li>
                          <li><span className="font-medium">Revolver Utilization:</span> Shows how much available credit is currently used.</li>
                          <li><span className="font-medium">Annual Income:</span> Evaluates income against loan requirements.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
