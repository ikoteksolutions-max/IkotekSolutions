import React, { useState } from "react";
import { Layout, Plus, Trash2, Download, Sparkles, CheckSquare, AlignLeft, Calendar, FileSpreadsheet, Eye, BarChart3, Users2, ShieldCheck, ArrowRight, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
}

const SmartFormsAIPage = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"builder" | "dashboard">("builder");
  const [formFields, setFormFields] = useState<FormField[]>([
    { id: "1", type: "text", label: "Full Name", placeholder: "Enter your full name" },
    { id: "2", type: "email", label: "Email Address", placeholder: "Enter your email address" },
    { id: "3", type: "select", label: "Interested Service", placeholder: "Choose a service" },
  ]);

  const fieldTypes = [
    { type: "text", label: "Short Text Input", icon: AlignLeft },
    { type: "email", label: "Email Field", icon: Users2 },
    { type: "checkbox", label: "Checkboxes", icon: CheckSquare },
    { type: "date", label: "Date Picker", icon: Calendar },
  ];

  const addField = (type: string, label: string) => {
    const newField: FormField = {
      id: Math.random().toString(),
      type,
      label,
      placeholder: `Enter your ${label.toLowerCase()}`,
    };
    setFormFields([...formFields, newField]);
    toast({
      title: "Field Added",
      description: `Successfully added ${label} to the form canvas.`,
    });
  };

  const removeField = (id: string) => {
    setFormFields(formFields.filter((f) => f.id !== id));
  };

  const triggerExport = () => {
    toast({
      title: "Excel Sheet Generated!",
      description: "Downloading response spreadsheet in CSV format (32 entries)...",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-emerald-600/10 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-semibold text-sm mb-6 animate-fade-in">
                <Layout className="w-4 h-4" /> Next-Gen Form Builder SaaS
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Google Forms <span className="text-gradient-orange">Revolutionized</span> with AI
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Meet **SmartFormsAI**, the ultimate answer to tedious form setups. Build visual, highly customized forms with 1000+ custom field combinations using our drag-and-drop builder, publish live instantly, and view analytical response dashboards.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://smartformsai.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 font-bold px-8 shadow-lg shadow-emerald-500/20">
                    Open Live App <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="#interactive-demo">
                  <Button size="lg" variant="outline">
                    Interactive Preview
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl filter blur-[50px] pointer-events-none" />
              {/* Product Visual Mockup */}
              <div className="relative bg-card border border-border/80 rounded-3xl p-6 shadow-2xl">
                <div className="flex justify-between items-center border-b border-border/40 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Layout className="w-5 h-5 text-emerald-500" />
                    <span className="font-bold text-sm">SmartFormsAI Live Stats</span>
                  </div>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-500 font-bold">Forms Online: 12k+</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary/40 border border-border/40 p-4 rounded-2xl text-center">
                    <p className="text-xs text-muted-foreground font-semibold">Total User Responses</p>
                    <p className="text-3xl font-extrabold text-foreground mt-1">450k+</p>
                  </div>
                  <div className="bg-secondary/40 border border-border/40 p-4 rounded-2xl text-center">
                    <p className="text-xs text-muted-foreground font-semibold">Time Saved (Avg / User)</p>
                    <p className="text-3xl font-extrabold text-foreground mt-1">4.5 Hours</p>
                  </div>
                </div>

                {/* Submissions speed indicator */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Recent Responses Stream</span>
                    <span>100% automated</span>
                  </div>
                  <div className="bg-secondary/20 p-3 rounded-xl border border-border/30 text-xs font-mono space-y-1.5 text-muted-foreground">
                    <div>[21:30:15] Submission from Ali K. - "Custom website quote form"</div>
                    <div>[21:31:02] Submission from Sara M. - "Feedback Form v2"</div>
                    <div className="text-emerald-500">[21:32:44] Exported 45 entries to Microsoft Excel.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Preview (Builder vs Dashboard) */}
      <section id="interactive-demo" className="py-20 bg-secondary/30 border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full">Interactive Workspace</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">Experience the Dashboard</h2>
            <p className="text-muted-foreground">Switch tabs below to play with the simplified interactive versions of our Form Builder and Responses Dashboard.</p>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={() => setActiveTab("builder")}
                variant={activeTab === "builder" ? "default" : "outline"}
                className={activeTab === "builder" ? "bg-emerald-600 text-white font-bold" : ""}
              >
                <Layout className="w-4 h-4 mr-2" /> Live Form Builder
              </Button>
              <Button
                onClick={() => setActiveTab("dashboard")}
                variant={activeTab === "dashboard" ? "default" : "outline"}
                className={activeTab === "dashboard" ? "bg-emerald-600 text-white font-bold" : ""}
              >
                <BarChart3 className="w-4 h-4 mr-2" /> Responses Dashboard
              </Button>
            </div>
          </div>

          {/* Interactive panel container */}
          <div className="bg-card border border-border/80 rounded-3xl p-6 shadow-2xl relative min-h-[500px] flex flex-col justify-between">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-secondary/60 px-4 py-1 rounded-md">
                smartforms.ai &gt; dashboard &gt; {activeTab}
              </span>
              <div className="w-6" />
            </div>

            {/* TAB CONTENT: Form Builder */}
            {activeTab === "builder" && (
              <div className="grid lg:grid-cols-12 gap-8 items-start flex-1">
                {/* LHS Sidebar fields selection */}
                <div className="lg:col-span-4 bg-secondary/30 p-5 rounded-2xl border border-border/50 space-y-4">
                  <h5 className="font-bold text-sm text-foreground mb-3 uppercase tracking-wider">Form Field Types</h5>
                  <div className="grid gap-2">
                    {fieldTypes.map((field) => {
                      const FieldIcon = field.icon;
                      return (
                        <button
                          key={field.type}
                          onClick={() => addField(field.type, field.label)}
                          className="flex items-center justify-between p-3.5 bg-card hover:bg-emerald-500/10 border border-border hover:border-emerald-500/30 rounded-xl text-left transition-all duration-300 group"
                        >
                          <span className="flex items-center gap-3 text-sm font-medium text-muted-foreground group-hover:text-foreground">
                            <FieldIcon className="w-4 h-4 text-emerald-500" />
                            {field.label}
                          </span>
                          <Plus className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500" />
                        </button>
                      );
                    })}
                  </div>
                  <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 text-[10px] text-muted-foreground italic">
                    💡 Click field options above to inject custom inputs directly into the canvas.
                  </div>
                </div>

                {/* RHS Main Canvas Editor */}
                <div className="lg:col-span-8 bg-background border border-border/80 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between">
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-foreground border-b border-border/40 pb-2">Client Inquiry Form</h4>
                    {formFields.length === 0 ? (
                      <div className="text-center py-12 text-muted-foreground">
                        <Layout className="w-12 h-12 mx-auto text-muted-foreground/30 mb-2" />
                        <p className="text-sm font-medium">Form is empty. Add inputs from the left panel!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {formFields.map((field) => (
                          <div key={field.id} className="p-4 bg-secondary/30 rounded-xl border border-border/50 flex justify-between items-center group/field">
                            <div className="flex-1 pr-4">
                              <span className="text-xs text-emerald-500 font-bold uppercase tracking-wider">{field.type} Field</span>
                              <label className="text-sm font-bold text-foreground block mt-0.5">{field.label}</label>
                              {field.type === "text" && (
                                <input type="text" disabled placeholder={field.placeholder} className="mt-2 w-full bg-card border border-border/40 rounded-lg px-3 py-2 text-xs" />
                              )}
                              {field.type === "email" && (
                                <input type="email" disabled placeholder={field.placeholder} className="mt-2 w-full bg-card border border-border/40 rounded-lg px-3 py-2 text-xs" />
                              )}
                              {field.type === "select" && (
                                <select disabled className="mt-2 w-full bg-card border border-border/40 rounded-lg px-3 py-2 text-xs text-muted-foreground">
                                  <option>{field.placeholder}</option>
                                </select>
                              )}
                              {field.type === "date" && (
                                <input type="date" disabled className="mt-2 w-full bg-card border border-border/40 rounded-lg px-3 py-2 text-xs text-muted-foreground" />
                              )}
                              {field.type === "checkbox" && (
                                <div className="mt-2 flex items-center gap-2">
                                  <input type="checkbox" disabled className="w-4 h-4 border border-border" />
                                  <span className="text-xs text-muted-foreground">Accept general Terms & Conditions</span>
                                </div>
                              )}
                            </div>
                            <Button size="icon" variant="ghost" className="opacity-0 group-hover/field:opacity-100 text-destructive hover:bg-destructive/10 rounded-full" onClick={() => removeField(field.id)}>
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-border/40">
                    <Button variant="outline" size="sm" className="gap-2 cursor-default">
                      <Eye className="w-3.5 h-3.5" /> Preview Form
                    </Button>
                    <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold cursor-default">
                      Save & Publish Live
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Responses Dashboard */}
            {activeTab === "dashboard" && (
              <div className="space-y-6 flex-1 animate-fade-in">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-secondary/40 border border-border/40 p-4 rounded-xl">
                    <p className="text-xs text-muted-foreground font-semibold">Total Responses</p>
                    <p className="text-2xl font-bold mt-1 text-foreground">32 entries</p>
                  </div>
                  <div className="bg-secondary/40 border border-border/40 p-4 rounded-xl">
                    <p className="text-xs text-muted-foreground font-semibold">Conversion Rate</p>
                    <p className="text-2xl font-bold mt-1 text-emerald-500">68.4%</p>
                  </div>
                  <div className="bg-secondary/40 border border-border/40 p-4 rounded-xl">
                    <p className="text-xs text-muted-foreground font-semibold">Satisfaction Rating</p>
                    <p className="text-2xl font-bold mt-1 text-foreground">4.8 / 5</p>
                  </div>
                  <div className="bg-secondary/40 border border-border/40 p-4 rounded-xl">
                    <p className="text-xs text-muted-foreground font-semibold">Status</p>
                    <p className="text-2xl font-bold mt-1 text-green-500 flex items-center gap-1.5 text-sm uppercase">
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" /> Live & Accepting
                    </p>
                  </div>
                </div>

                {/* Table representation */}
                <div className="border border-border/60 rounded-xl overflow-hidden bg-background">
                  <div className="flex justify-between items-center bg-secondary/40 p-4 border-b border-border/40">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <Table className="w-4 h-4 text-emerald-500" /> Recent Form Responses
                    </h5>
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-8 gap-1.5" onClick={triggerExport}>
                      <Download className="w-3.5 h-3.5" /> Export to Excel
                    </Button>
                  </div>
                  <div className="overflow-x-auto text-xs">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-secondary/20 border-b border-border/40 font-semibold text-muted-foreground">
                          <th className="p-3">Timestamp</th>
                          <th className="p-3">Full Name</th>
                          <th className="p-3">Email Address</th>
                          <th className="p-3">Selected Service</th>
                          <th className="p-3">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30">
                        <tr>
                          <td className="p-3 text-muted-foreground">2026-06-01 21:20</td>
                          <td className="p-3 font-semibold">Muhammad Ali</td>
                          <td className="p-3 text-muted-foreground">ali@gmail.com</td>
                          <td className="p-3">Web Development</td>
                          <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-medium">New</span></td>
                        </tr>
                        <tr>
                          <td className="p-3 text-muted-foreground">2026-06-01 20:45</td>
                          <td className="p-3 font-semibold">Ayesha Khan</td>
                          <td className="p-3 text-muted-foreground">ayesha@outlook.com</td>
                          <td className="p-3">Mobile Apps Development</td>
                          <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-medium">New</span></td>
                        </tr>
                        <tr>
                          <td className="p-3 text-muted-foreground">2026-06-01 19:12</td>
                          <td className="p-3 font-semibold">John Doe</td>
                          <td className="p-3 text-muted-foreground">johndoe@yahoo.com</td>
                          <td className="p-3">UI/UX Design Strategy</td>
                          <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium">Reviewed</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold">SmartFormsAI Capabilities</h2>
            <p className="text-muted-foreground mt-2">Why SmartFormsAI is chosen by marketing professionals.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card border border-border/60 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">1,000+ Field Templates</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Save hours writing customized CSS/JS forms. Select from pre-made widgets, inputs, sliders, and ratings fields in a snap.</p>
            </div>
            <div className="p-6 bg-card border border-border/60 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Google Sheets Sync</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Connect webhooks, export custom CSV spreadsheets, or tie entries to real-time Google Sheets for automated CRM entries.</p>
            </div>
            <div className="p-6 bg-card border border-border/60 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2">Zero-code Live Sharing</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Get an instant landing page URL for your form, or copy direct HTML iframe codes to embed the builder inside any React/HTML site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Build Your First Form Today</h2>
          <p className="text-lg text-background/60 mb-8 max-w-2xl mx-auto">Create surveys, client questionnaires, signup forms, and more. Set your rules, go live, and watch responses organize themselves automatically.</p>
          <div className="flex justify-center gap-4">
            <a href="https://smartformsai.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="hero" className="gap-2 font-bold px-8">
                Build Form Now <Layout className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartFormsAIPage;
