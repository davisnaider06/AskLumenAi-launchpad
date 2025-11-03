import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What if I'm not from an AI or technical background?",
    answer: "Perfect! You don't need any AI or coding experience. We teach everything from scratch with practical, hands-on projects. 60% of our successful founders came from non-technical backgrounds. You'll learn exactly what you need to build and launch your AI startup.",
  },
  {
    question: "How much time do I need to commit per week?",
    answer: "Plan for 6-8 hours per week: 2 live sessions (2 hours each) plus 2-4 hours for assignments and building your MVP. Everything is recorded, so you can learn at your own pace if you have scheduling conflicts.",
  },
  {
    question: "What guarantee or support is provided?",
    answer: "We offer a 7-day money-back guarantee—no questions asked. Plus, you get lifetime access to all content, ongoing community support, and quarterly alumni sessions with new industry insights and networking opportunities.",
  },
  {
    question: "How long is the course?",
    answer: "The AI Startup Launchpad is a 90-day intensive program. You get lifetime access to all recorded content and materials.",
  },
  {
    question: "What if I can't attend live sessions?",
    answer: "No problem! All sessions are recorded and you'll have full access within 24 hours. We also have a vibrant community where you can ask questions and get support from instructors and peers anytime.",
  },
  {
    question: "Is the early bird price really for 5 days only?",
    answer: "Yes, the $5.99 early bird pricing is only available for the first 5 days after launch. After that, the price increases to $9.99. We want to reward early supporters of the program.",
  },
  {
    question: "What's included in the Premium Mentorship add-on?",
    answer: "The $99 premium add-on gives you 4 exclusive 1-on-1 mentorship sessions with Venkatesh Mishra (one per month), personalized feedback on your startup, priority support in community channels, and invitations to exclusive networking events.",
  },
  {
    question: "Do I need technical skills to join?",
    answer: "No! While some technical knowledge is helpful, we teach everything from the ground up. We have both technical and non-technical founders in our cohorts. You'll learn what you need to build and launch your AI startup.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the course within the first week, we'll provide a full refund—no questions asked.",
  },
  {
    question: "How are the $500 prize and investment opportunities awarded?",
    answer: "At the end of the cohort, you'll pitch your startup to our panel of expert judges. The best pitch wins $500 cash. Top 10 startups get introduced to our investor network and receive fundraising support from our advisors.",
  },
  {
    question: "Can I access the course from anywhere in the world?",
    answer: "Absolutely! The course is 100% online and accessible from anywhere. Live sessions are scheduled to accommodate multiple time zones, and all recordings are available immediately after each session.",
  },
];

export const FAQ = () => {
  return (
    <section className="relative py-24 bg-secondary/30 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-cosmic opacity-10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-cosmic">Questions</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Everything you need to know about the AI Startup Launchpad
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="relative border border-primary/20 rounded-xl bg-card/50 backdrop-blur-sm px-6 hover:border-primary/40 transition-colors group"
              >
                <div className="absolute inset-0 bg-gradient-cosmic opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
