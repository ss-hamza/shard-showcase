import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Can Alzheimer's risk actually be reduced?",
      answer: "Yes, research shows that while we cannot eliminate Alzheimer's risk entirely, certain lifestyle modifications and early interventions can significantly reduce the likelihood of developing the disease. Our genomic analysis helps identify your specific risk factors and provides personalized recommendations."
    },
    {
      id: "item-2",
      question: "If no one knows exactly what causes Alzheimer's, how can you tell me my risk?",
      answer: "While the exact mechanisms aren't fully understood, decades of research have identified genetic variants, biomarkers, and lifestyle factors that significantly influence Alzheimer's risk. Our comprehensive analysis combines genetic testing with the latest scientific research to provide accurate risk assessments."
    },
    {
      id: "item-3",
      question: "Is this only for people with a family history of Alzheimer's?",
      answer: "Not at all. While family history is one risk factor, the majority of Alzheimer's cases occur in people without a strong family history. Our testing is beneficial for anyone who wants to understand their risk and take proactive steps for brain health."
    },
    {
      id: "item-4",
      question: "If there's no cure for Alzheimer's, what's the point of knowing my risk?",
      answer: "Knowledge is power. Understanding your risk allows you to make informed decisions about lifestyle changes, medical monitoring, and preventive strategies that can significantly impact your brain health. Early intervention is key to prevention."
    },
    {
      id: "item-5",
      question: "How does it work?",
      answer: "Our process involves a simple saliva test that analyzes your DNA for genetic variants associated with Alzheimer's risk. We combine this with family history, lifestyle factors, and the latest research to provide you with a comprehensive risk assessment and personalized recommendations."
    },
    {
      id: "item-6",
      question: "Is medical oversight available?",
      answer: "Yes, we work with certified genetic counselors and healthcare professionals who can help interpret your results and guide you through next steps. We also recommend discussing your results with your primary care physician."
    },
    {
      id: "item-7",
      question: "What are the benefits?",
      answer: "Benefits include early risk identification, personalized prevention strategies, peace of mind through knowledge, ability to make informed healthcare decisions, and access to cutting-edge research and interventions that may not be available otherwise."
    },
    {
      id: "item-8",
      question: "How secure is my data?",
      answer: "We take data security extremely seriously. Your genetic information is encrypted, stored securely, and never shared without your explicit consent. We comply with all relevant privacy regulations including HIPAA and GDPR."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" id="faq">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-navy">
          FAQs
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Got questions? Here's everything you need to know about how Biohack Genomics helps you 
          understand, reduce, and take control of your personal risk for Alzheimer's.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <Accordion key={faq.id} type="single" collapsible className="w-full">
              <AccordionItem value={faq.id} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium text-navy hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;