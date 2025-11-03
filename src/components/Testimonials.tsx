import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";
import testimonial6 from "@/assets/testimonial-6.jpg";
import testimonial7 from "@/assets/testimonial-7.jpg";
import testimonial8 from "@/assets/testimonial-8.jpg";
import testimonial9 from "@/assets/testimonial-9.jpg";
import testimonial10 from "@/assets/testimonial-10.jpg";
import testimonial11 from "@/assets/testimonial-11.jpg";
import testimonial12 from "@/assets/testimonial-12.jpg";
import testimonial13 from "@/assets/testimonial-13.jpg";
import testimonial14 from "@/assets/testimonial-14.jpg";
import testimonial15 from "@/assets/testimonial-15.jpg";
import testimonial16 from "@/assets/testimonial-16.jpg";
import testimonial17 from "@/assets/testimonial-17.jpg";
import testimonial18 from "@/assets/testimonial-18.jpg";
import testimonial19 from "@/assets/testimonial-19.jpg";
import testimonial20 from "@/assets/testimonial-20.jpg";
import testimonial21 from "@/assets/testimonial-21.jpg";
import testimonial22 from "@/assets/testimonial-22.jpg";
import testimonial23 from "@/assets/testimonial-23.jpg";
import testimonial24 from "@/assets/testimonial-24.jpg";
import testimonial25 from "@/assets/testimonial-25.jpg";
import testimonial26 from "@/assets/testimonial-26.jpg";
import testimonial27 from "@/assets/testimonial-27.jpg";
import testimonial28 from "@/assets/testimonial-28.jpg";
import testimonial29 from "@/assets/testimonial-29.jpg";
import testimonial30 from "@/assets/testimonial-30.jpg";
import testimonial31 from "@/assets/testimonial-31.jpg";
import testimonial32 from "@/assets/testimonial-32.jpg";
import testimonial33 from "@/assets/testimonial-33.jpg";
import testimonial34 from "@/assets/testimonial-34.jpg";
import testimonial35 from "@/assets/testimonial-35.jpg";
import testimonial36 from "@/assets/testimonial-36.jpg";
import testimonial37 from "@/assets/testimonial-37.jpg";
import testimonial38 from "@/assets/testimonial-38.jpg";
import testimonial39 from "@/assets/testimonial-39.jpg";
import testimonial40 from "@/assets/testimonial-40.jpg";

const testimonials = [
  { name: "Sarah Chen", startup: "VisionAI", text: "Launched my MVP in 6 weeks and got my first 100 users. The live feedback sessions with Venkatesh were game-changing. Now generating $2K MRR.", image: testimonial1 },
  { name: "Michael Rodriguez", startup: "DataFlow", text: "Raised $50K from angels I met through the program. The pitch preparation and investor introductions were invaluable. ROI was 500x the course fee.", image: testimonial2 },
  { name: "James Washington", startup: "SmartCode", text: "Built and launched my SaaS in 8 weeks flat. Got into top 10 and pitched to 3 VCs. The accountability and weekly deadlines kept me on track.", image: testimonial3 },
  { name: "Priya Patel", startup: "AIAssist", text: "I learned more in 12 weeks than I did in 2 years of trying to figure it out alone.", image: testimonial4 },
  { name: "Maria Garcia", startup: "AutoML Pro", text: "The advisor network opened doors I never thought possible. Highly recommended!", image: testimonial5 },
  { name: "Ahmed Khan", startup: "NeuralNet Solutions", text: "From zero to funded startup in 3 months. The program delivers what it promises.", image: testimonial6 },
  { name: "Kevin Liu", startup: "DeepLearn AI", text: "The live sessions with Venkatesh were game-changing. His insights are gold.", image: testimonial7 },
  { name: "Emma Thompson", startup: "CloudML", text: "Not just theory - real practical advice that helped me launch and grow my AI startup.", image: testimonial8 },
  { name: "Jasmine Williams", startup: "PredictAI", text: "The community alone is worth the price. Amazing support from fellow founders.", image: testimonial9 },
  { name: "Raj Malhotra", startup: "IntelliBot", text: "This program helped me avoid costly mistakes and focus on what really matters.", image: testimonial10 },
  { name: "Sophie Nguyen", startup: "AICreative", text: "Venkatesh's guidance on fundraising was incredibly helpful. Raised $300K!", image: testimonial11 },
  { name: "Carlos Silva", startup: "AutoVision", text: "The structured curriculum made building my MVP so much easier than expected.", image: testimonial12 },
  { name: "Fatima Hassan", startup: "SmartAnalytics", text: "Best AI startup program out there. The ROI is unbelievable.", image: testimonial13 },
  { name: "David Miller", startup: "MLOps Pro", text: "I was skeptical at first, but this program exceeded all my expectations.", image: testimonial14 },
  { name: "Amara Okafor", startup: "AIHealth", text: "The advisor network helped me connect with investors I couldn't reach on my own.", image: testimonial15 },
  { name: "Jin Park", startup: "NeuralCloud", text: "From idea to product-market fit in 12 weeks. Amazing journey!", image: testimonial16 },
  { name: "Rachel Cohen", startup: "DataGenius", text: "The mentorship sessions were incredibly valuable. Worth every penny!", image: testimonial17 },
  { name: "Ananya Sharma", startup: "AIConsult", text: "This program taught me how to think like a successful AI entrepreneur.", image: testimonial18 },
  { name: "Marcus Johnson", startup: "SmartPredict", text: "The frameworks for problem validation saved me months of wasted effort.", image: testimonial19 },
  { name: "Yuki Tanaka", startup: "AIVisionary", text: "Outstanding program with real results. My startup is now generating revenue!", image: testimonial20 },
  { name: "Isabella Martinez", startup: "DeepTech AI", text: "The pitch deck templates and fundraising advice were worth the entire course fee.", image: testimonial21 },
  { name: "Omar Al-Said", startup: "IntelliSense", text: "Venkatesh's experience in AI startups shines through. Learned so much!", image: testimonial22 },
  { name: "Li Wei", startup: "SmartAI Labs", text: "This program gave me the confidence to pursue my AI startup dream.", image: testimonial23 },
  { name: "Tyler Anderson", startup: "MLStart", text: "The growth hacking techniques helped me get my first 1000 users in 30 days.", image: testimonial24 },
  { name: "Zainab Ahmed", startup: "AIInnovate", text: "Best decision for my startup. The community support is phenomenal.", image: testimonial25 },
  { name: "Arjun Reddy", startup: "TechAI Pro", text: "The real-world case studies made complex concepts easy to understand.", image: testimonial26 },
  { name: "Daniel Tan", startup: "AIFlow", text: "I went from confused beginner to confident founder thanks to this program.", image: testimonial27 },
  { name: "Luis Mendoza", startup: "DataMind", text: "The weekly feedback sessions kept me on track and accountable.", image: testimonial28 },
  { name: "Layla Rashid", startup: "SmartVision AI", text: "This program is a must for anyone serious about building an AI startup.", image: testimonial29 },
  { name: "Anna Kowalski", startup: "MLStrategy", text: "The investor connections alone paid for the course multiple times over.", image: testimonial30 },
  { name: "Kwame Mensah", startup: "AIVenture", text: "Practical, actionable advice from day one. No fluff, just results.", image: testimonial31 },
  { name: "Ji-hye Kim", startup: "NeuralStart", text: "The curriculum is perfectly structured for founders at any stage.", image: testimonial32 },
  { name: "Kavya Iyer", startup: "AIScape", text: "I learned how to build sustainable AI products that people actually want.", image: testimonial33 },
  { name: "Robert Fischer", startup: "DeepCode AI", text: "The technical depth combined with business strategy is perfect.", image: testimonial34 },
  { name: "Nia Williams", startup: "SmartML", text: "This program turned my side project into a funded startup in 3 months!", image: testimonial35 },
  { name: "Takeshi Yamamoto", startup: "AILab Pro", text: "The advisor mentorship helped me navigate complex technical decisions.", image: testimonial36 },
  { name: "Valentina Lopez", startup: "DataAI Solutions", text: "Best AI startup education I've found. Comprehensive and practical.", image: testimonial37 },
  { name: "Karim Abbas", startup: "IntelliLearn", text: "The community of fellow founders became my biggest support system.", image: testimonial38 },
  { name: "Chen Wang", startup: "AIBridge", text: "From zero knowledge to launching my AI product in just 12 weeks.", image: testimonial39 },
  { name: "Sophia Anderson", startup: "MLGenius", text: "This program gave me everything I needed to succeed in the AI startup world.", image: testimonial40 },
];

export const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-24 bg-background/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Success <span className="text-transparent bg-clip-text bg-gradient-primary">Stories</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Join hundreds of founders who have launched successful AI startups through our program
        </p>

        <div className="flex justify-center mb-12">
          <Button
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-primary hover:shadow-glow-blue text-primary-foreground px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105"
          >
            {showAll ? "Hide Success Stories" : "View Success Stories"}
          </Button>
        </div>

        {showAll && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto animate-fade-in">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-blue"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-primary p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-foreground truncate">{testimonial.name}</h4>
                    <p className="text-sm text-primary truncate">{testimonial.startup}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
