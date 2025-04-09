
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, FileText, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Demo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [previewData, setPreviewData] = useState<string[][]>([]);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (file) {
      setUploadStatus('uploading');
      
      // Simulate processing
      setTimeout(() => {
        setUploadStatus('success');
        setSubmitted(true);
        toast({
          title: "Demo request submitted",
          description: "We'll contact you soon to discuss your needs.",
        });
      }, 1500);
    } else {
      toast({
        title: "Please upload a CSV file",
        description: "A sample CSV file is required for this demo",
        variant: "destructive",
      });
    }
  };
  
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <div className="bg-white shadow-lg rounded-2xl p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Request a <span className="gradient-text">Demo</span></h2>
                  <p className="text-gray-600">
                    See how CreditCompass AI can help your institution make smarter lending decisions while promoting financial inclusion.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" type="text" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" type="text" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" type="text" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job title</Label>
                      <Input id="jobTitle" type="text" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company size</Label>
                    <Select>
                      <SelectTrigger id="companySize">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1001+">1001+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interests">What aspects of CreditCompass AI are you most interested in?</Label>
                    <Select>
                      <SelectTrigger id="interests">
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="risk-assessment">Credit Risk Assessment</SelectItem>
                        <SelectItem value="fraud-detection">Fraud Detection</SelectItem>
                        <SelectItem value="financial-inclusion">Financial Inclusion</SelectItem>
                        <SelectItem value="alternative-data">Alternative Data Analysis</SelectItem>
                        <SelectItem value="social-impact">Social Impact Reporting</SelectItem>
                        <SelectItem value="all">All of the above</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Upload a sample CSV file with credit data</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Input 
                        id="csvFile" 
                        type="file" 
                        accept=".csv" 
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Label 
                        htmlFor="csvFile" 
                        className="cursor-pointer flex flex-col items-center justify-center gap-2"
                      >
                        <div className="bg-brand-purple/10 p-3 rounded-full">
                          <Upload className="h-6 w-6 text-brand-purple" />
                        </div>
                        <span className="text-lg font-medium text-gray-700">
                          {file ? file.name : "Click to upload a CSV file"}
                        </span>
                        <span className="text-sm text-gray-500">
                          Upload your sample credit data for analysis
                        </span>
                      </Label>
                    </div>
                    
                    {previewData.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-3 flex items-center">
                          <FileText className="mr-2 h-5 w-5 text-brand-purple" />
                          CSV Preview (first 5 rows)
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead>
                              <tr>
                                {previewData[0]?.map((header, i) => (
                                  <th key={i} className="py-2 px-4 border-b text-left text-sm font-medium text-gray-700">
                                    {header || `Column ${i+1}`}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {previewData.slice(1).map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                  {row.map((cell, j) => (
                                    <td key={j} className="py-2 px-4 border-b text-sm text-gray-700">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Any specific questions or requirements?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your needs and how we can help..."
                      className="h-32"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-brand-purple hover:bg-brand-purple/90"
                    disabled={uploadStatus === 'uploading' || !file}
                  >
                    {uploadStatus === 'uploading' ? 'Processing...' : 'Request Demo'}
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your demo request has been submitted successfully. One of our team members will contact you shortly to schedule your personalized demo.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSubmitted(false)}
                  className="mx-auto"
                >
                  Return to Form
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
