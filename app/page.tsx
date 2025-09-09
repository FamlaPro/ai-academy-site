import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Users, Target, CheckCircle, BookOpen, Calendar } from "lucide-react";

export default function FamlaAIAcademyLanding() {
  return (
    <div className="font-inter text-gray-800 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#002D0F] to-[#007774] text-white py-20 px-6 text-center border-b-4 border-[#007774]">
        <h1 className="text-4xl lg:text-5xl font-display text-balance mb-4">
          AI Leadership for Executives - Guided by Global Experts
        </h1>
        <p className="text-lg lg:text-xl font-body max-w-3xl mx-auto mb-6 text-balance">
          Remote, facilitator-led program for senior leaders. Build a
          board-ready AI Roadmap for your organization with direct faculty
          coaching.
        </p>
        <p className="font-semibold mb-4 text-xl">
          Next Cohort Starts:{" "}
          <span className="underline">24th September 2025</span>
        </p>
        <ul className="font-semibold mb-6 space-y-2">
          <li>💶 €5,000 (excl. VAT)</li>
          <li>👥 20 seats max</li>
          <li>🎯 Includes 1:1 executive coaching</li>
          <li>🎁 €2,500 worth of Famla AI credits included</li>
        </ul>
        <Button
          size="lg"
          className="bg-[#007774] hover:bg-[#005C5A] text-white"
        >
          Apply Now
        </Button>
      </section>

      {/* Why Now */}
      <section className="bg-[#F1F5F9] py-16 px-6 text-center">
        <h2 className="text-2xl lg:text-3xl font-display text-balance mb-4">
          95% of AI pilots deliver zero ROI
        </h2>
        <p className="max-w-2xl mx-auto text-lg font-body text-balance">
          MIT’s 2025 State of AI in Business report shows only 5% of
          organizations see measurable value. The difference? Executive
          leadership.
        </p>
        <div className="mt-6 flex items-center justify-center text-[#007774] font-semibold text-lg">
          <Calendar className="w-6 h-6 mr-2" /> Next Cohort: 24th September 2025
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 px-6">
        <h2 className="text-3xl lg:text-4xl font-display text-center mb-12 text-balance">
          Meet the Faculty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                Faculty Photo
              </div>
              <h3 className="text-xl font-display">Dr. John Curran</h3>
              <p className="italic mb-2">Leadership & Executive Coaching</p>
              <p>
                Executive coach to leaders at Google, Amazon, Novartis, HSBC,
                Coca-Cola, and the UK Civil Service. UCL Professor of Practice;
                Financial Times contributor; TEDx speaker.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                Faculty Photo
              </div>
              <h3 className="text-xl font-display">Dr. Ezekiel Takam</h3>
              <p className="italic mb-2">AI Ethics & Responsible AI</p>
              <p>
                Berkman Klein Fellow (Harvard University). Researcher on AI
                ethics and governance, helping leaders adopt AI responsibly.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                Faculty Photo
              </div>
              <h3 className="text-xl font-display">Alain Cohen</h3>
              <p className="italic mb-2">Strategy & Future of Work</p>
              <p>
                Former Managing Director with full P&L responsibility. Equips
                executives to identify AI use-cases with measurable bottom-line
                impact.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                Faculty Photo
              </div>
              <h3 className="text-xl font-display">Michael Goodman</h3>
              <p className="italic mb-2">AI Regulation & Data Governance</p>
              <p>
                Information security leader with military intelligence
                background. Expert in ISO 27001, cloud security, and AI risk
                frameworks.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Format */}
      <section className="bg-[#F9FAFB] py-16 px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-display mb-8 text-balance">
          How the Program Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <Users className="w-10 h-10 mx-auto text-[#007774] mb-4" />
            <h3 className="font-display text-lg mb-2">Live & Remote</h3>
            <p className="font-body text-balance">
              6 weeks of facilitator-led sessions designed for busy executives.
            </p>
          </div>
          <div>
            <Target className="w-10 h-10 mx-auto text-[#007774] mb-4" />
            <h3 className="font-display text-lg mb-2">Cohort Learning</h3>
            <p className="font-body text-balance">
              Up to 20 executives per group for peer exchange and collaboration.
            </p>
          </div>
          <div>
            <CheckCircle className="w-10 h-10 mx-auto text-[#007774] mb-4" />
            <h3 className="font-display text-lg mb-2">1:1 Coaching</h3>
            <p className="font-body text-balance">
              Dedicated sessions with faculty to refine your AI Roadmap.
            </p>
          </div>
        </div>
        <div className="mt-6 text-[#007774] font-semibold">
          Next Cohort: 24th September 2025
        </div>
        <Button
          size="lg"
          className="mt-8 bg-[#007774] hover:bg-[#005C5A] text-white"
        >
          Apply Now
        </Button>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-display text-center mb-8 text-balance">
          Curriculum
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              AI Literacy for Executives (Goodman)
            </AccordionTrigger>
            <AccordionContent>
              What AI can/can’t do; how to evaluate vendors and proposals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Leading Change for AI (Curran)</AccordionTrigger>
            <AccordionContent>
              Psychological safety and leadership models for adoption.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>AI Ethics & Trust (Takam)</AccordionTrigger>
            <AccordionContent>
              Principles for responsible, bias-aware deployment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>AI Regulation (Goodman)</AccordionTrigger>
            <AccordionContent>
              EU AI Act and global rules every executive must know.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Data Governance & Secure LLMs (Goodman)
            </AccordionTrigger>
            <AccordionContent>
              Fundamentals to private deployments; deliverable: risk monitoring
              framework.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Systems Thinking for ROI (Cohen)
            </AccordionTrigger>
            <AccordionContent>
              Spot AI use-cases tied to measurable P&L outcomes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>The Future of Work (Cohen)</AccordionTrigger>
            <AccordionContent>
              Workforce planning and role redesign in an AI-enabled world.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Capstone + Coaching</AccordionTrigger>
            <AccordionContent>
              Produce and refine your executive AI Roadmap with faculty
              feedback.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Outcomes */}
      <section className="bg-[#002D0F] text-white py-16 px-6 border-t-4 border-[#007774]">
        <h2 className="text-3xl lg:text-4xl font-display text-center mb-10 text-balance">
          What You'll Gain
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <BookOpen className="w-10 h-10 mx-auto mb-4 text-[#007774]" />
            <p className="font-body text-balance">
              Clarity on AI's real impact
            </p>
          </div>
          <div>
            <CheckCircle className="w-10 h-10 mx-auto mb-4 text-[#007774]" />
            <p className="font-body text-balance">
              Confidence to lead responsibly
            </p>
          </div>
          <div>
            <Target className="w-10 h-10 mx-auto mb-4 text-[#007774]" />
            <p className="font-body text-balance">Board-ready AI Roadmap</p>
          </div>
          <div>
            <Users className="w-10 h-10 mx-auto mb-4 text-[#007774]" />
            <p className="font-body text-balance">1:1 executive coaching</p>
          </div>
        </div>
        <p className="mt-8 text-lg font-display text-[#007774] text-center text-balance">
          Bonus: €2,500 worth of Famla AI credits included
        </p>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-display mb-6 text-balance">
          Investment
        </h2>
        <div className="bg-[#F1F5F9] rounded-2xl p-10 max-w-md mx-auto shadow-md space-y-4">
          <p className="text-2xl font-display">
            €5,000 <span className="text-base font-body">(excl. VAT)</span>
          </p>
          <ul className="space-y-2 text-gray-700 font-body">
            <li>✔ All sessions</li>
            <li>✔ Capstone project</li>
            <li>✔ 1:1 executive coaching</li>
            <li>✔ €2,500 Famla AI credits</li>
          </ul>
          <p className="font-semibold text-[#007774]">
            Next Cohort: 24th September 2025
          </p>
          <Button
            size="lg"
            className="bg-[#007774] hover:bg-[#005C5A] text-white"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#002D0F] to-[#007774] text-white py-20 px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-display mb-4 text-balance">
          Next Cohort: 24th September 2025 - 20 Seats Only
        </h2>
        <ul className="mb-6 space-y-2">
          <li>📡 Remote, live, and facilitator-led</li>
          <li>🎯 Apply today to secure your seat</li>
          <li>🎁 Includes €2,500 Famla AI credits</li>
        </ul>
        <Button
          size="lg"
          className="bg-[#007774] hover:bg-[#005C5A] text-white"
        >
          Apply Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-[#002D0F] text-white py-10 text-center">
        <p className="mb-2 font-body">© 2025 Famla AI Academy</p>
        <p className="text-sm font-body">Privacy • Contact</p>
      </footer>
    </div>
  );
}
