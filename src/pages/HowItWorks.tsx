import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Activity, Brain, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import elderlyConsultation from "@/assets/elderly-consultation.jpg";
import doctorPatient from "@/assets/doctor-patient.jpg";
import healthApp from "@/assets/health-app.jpg";
import aiSupport from "@/assets/ai-support.jpg";
import doctorConsultation from "@/assets/doctor-consultation.jpg";
import familyHero from "@/assets/family-hero.jpg";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${familyHero})` }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your brain has a future.
            <br />
            Let's make sure it's a strong one.
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            You have the biology. We have the science. Together we have the opportunity 
            to protect your memories, your independence, and the people you love.
          </p>
          <p className="text-lg text-white/80 mb-8">
            Your future isn't fixed. Let's shape it, together.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </section>

      {/* Step 1: Actionable Plan */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">
                Receive an Actionable Plan
                <br />
                Based on You
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Once we've analyzed your genetics, biomarkers, and lifestyle, you'll get a 
                personalized prevention plan—targeting the specific factors driving your 
                risk. From supplements to daily habits, every recommendation is tailored to 
                help you lower your Alzheimer's risk with precision.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="lg">Learn More</Button>
                <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={elderlyConsultation} 
                alt="Personalized consultation" 
                className="rounded-2xl w-full"
              />
            </div>
          </div>

          {/* Detailed Features */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={doctorPatient} 
                alt="Doctor and patient consultation" 
                className="rounded-2xl w-full"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Activity className="text-primary w-6 h-6" />
                  <h3 className="text-xl font-semibold text-navy">Supplementation</h3>
                </div>
                <p className="text-muted-foreground">
                  We identify exactly what your body needs and make the necessary supplement 
                  recommendations—guided by biomarker and genetic analysis. And unlike most 
                  platforms, Biohack Genomics doesn't sell supplements or profit from them, so 
                  every recommendation is 100% unbiased and made in your best interest.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="text-primary w-6 h-6" />
                  <h3 className="text-xl font-semibold text-navy">Custom Workouts and Meal Plans</h3>
                </div>
                <p className="text-muted-foreground">
                  We design personal exercise and nutrition plans to reduce inflammation, 
                  optimize metabolism, and support long-term cognitive function. Every 
                  recommendation is completely personalized—because what works for others 
                  may not work for you.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="text-primary w-6 h-6" />
                  <h3 className="text-xl font-semibold text-navy">Lifestyle Enhancements</h3>
                </div>
                <p className="text-muted-foreground">
                  We pinpoint the daily habits contributing to your Alzheimer's risk. Then we guide 
                  you through science-backed changes proven to protect brain health and lower 
                  that risk over time.
                </p>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" size="lg">Learn More</Button>
                <Button size="lg" className="bg-primary hover:bg-primary/90">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Risk Assessment */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">
                Find Out How Much You 
                Can Lower Your Risk
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At the end of your report, you'll see more than just where you stand—you'll 
                see where you could go. After identifying the genetic, biomarker, and 
                lifestyle factors contributing to your Alzheimer's risk, our system models a 
                new, projected risk estimate based on your personalized prevention plan. 
                This future-facing score shows how much your risk could drop if you follow 
                the recommended changes—giving you a clear, motivating picture of the...
              </p>
            </div>
            <div className="relative">
              <img 
                src={elderlyConsultation} 
                alt="Risk assessment consultation" 
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Personalized Tools */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Activity className="w-8 h-8 text-navy" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Step 3 Overview</h2>
            <p className="text-white/80">Let's dive a bit deeper into Step 3: Take Action & Track Progress</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Personalized Tools That
                Keep You on Track
              </h3>
              <p className="text-lg text-white/90 mb-8">
                Stay consistent with tools built just for you. You'll get unlimited access to 
                meal plans and workouts personalized to your genetics, biomarkers, and 
                goals—so every bite and every rep supports your brain. Plus, we'll send 
                intelligent reminders when it's time to retest key blood markers, helping you 
                stay proactive and on track.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span>Unlimited personalized meal plans based on your biology and preferences</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span>Unlimited custom workout plans tailored to your brain health goals</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={healthApp} 
                alt="Health tracking app" 
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Support Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">
                24/7 Support, Powered by
                AI
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your 24/7 AI health assistant is always available to answer questions, 
                explain your results, and guide your next steps—whenever you need it. 
                You'll also receive regular updates on the latest Alzheimer's prevention 
                research, ensuring your plan evolves with both your progress and the 
                science.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary w-5 h-5 mt-1" />
                  <span>AI health assistant available anytime to answer questions and guide your next steps</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary w-5 h-5 mt-1" />
                  <span>Ongoing updates on the latest Alzheimer's prevention research</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary w-5 h-5 mt-1" />
                  <span>Support that evolves with your data and decisions</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="lg">Learn More</Button>
                <Button size="lg" className="bg-primary hover:bg-primary/90">Sign Up</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aiSupport} 
                alt="AI support assistant" 
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">
                Resources You Can Share &
                Save
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Easily share your progress with your care team using a downloadable, 
                doctor-ready report that outlines your risk profile and personalized plan. 
                Plus, enjoy exclusive member discounts on high-quality labs, supplements, 
                and health devices to support your prevention journey.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary w-5 h-5 mt-1" />
                  <span>Downloadable, doctor-ready report to bring to your primary care provider or specialist</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary w-5 h-5 mt-1" />
                  <span>Exclusive member discounts on labs, supplements, and health devices</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="outline" size="lg">Learn More</Button>
                <Button size="lg" className="bg-primary hover:bg-primary/90">Sign Up</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={doctorConsultation} 
                alt="Doctor consultation" 
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-navy mb-16">
            What's Included with Your Biohack
            Genomics Membership
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-navy mb-6">Lifestyle & Health Insights</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Comprehensive lifestyle analysis,</span> including sleep, stress, diet, exercise, alcohol, hearing, social connection, and more
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Sleep analysis</span> with personalized tips to improve restorative sleep and brain recovery
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Diet analysis</span> with science-backed recommendations for brain-boosting nutrition
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Education</span> on Alzheimer's disease, risk factors, and prevention science
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-navy mt-8 mb-4">Personalized Prevention Plan</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Actionable plan</span> covering supplements, any medications you should consider, nutrition, workouts, and daily habits
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      A modeled <span className="font-semibold">"new" risk estimate</span> showing your potential risk reduction if you follow the plan
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">AI Risk Tracker</span> that updates your score as you complete the plan and retest markers
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-navy mb-6">Advanced Risk Analysis</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Genetic risk interpretation</span> powered by over 1,000 research studies
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Biomarker risk analysis</span> using insights from 3,500+ peer-reviewed papers
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Lifestyle risk assessment</span> based on data from 500+ clinical studies
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-navy mt-8 mb-4">Ongoing Tools & Support</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Unlimited personalized meal plans</span> tailored to your biology and preferences
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Unlimited personalized workout plans</span> designed for cognitive health and longevity
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Unlimited access to your AI health assistant</span> for questions and support anytime
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Personalized reminders</span> to retest blood biomarkers at optimal intervals
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Exclusive member discounts</span> on labs, devices, and supplements
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Ongoing updates</span> on the latest Alzheimer's prevention research
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-primary w-5 h-5 mt-1" />
                    <div>
                      <span className="font-semibold">Downloadable doctor-ready report</span> to share with your primary care provider
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;