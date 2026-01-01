import Link from "next/link"
import { Linkedin, Mail, ExternalLink, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Dave Ishii
            </Link>
            <div className="flex items-center gap-6">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Publications
              </Link>
              <Button asChild variant="default" size="sm">
                <Link href="#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Fintech | Math | NASDAQ</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            I'm Dave Ishii — a Fintech and AI entrepreneur with a background in pure mathematics, fashion business, and
            international market development. As Founder & CEO of{" "}
            <span className="text-foreground font-medium">Kiara Inc.</span>, I build products that bridge technology and
            human experience, like the Kiara Translator app for multilingual teams.
          </p>
          <div className="flex items-center gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://linktr.ee/ishiid" target="_blank" rel="noopener noreferrer">
                View Portfolio
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <Link
              href="https://www.linkedin.com/in/dai19980401"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.kiara.team"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Building2 className="w-5 h-5" />
              <span className="sr-only">Company Website</span>
            </Link>
            <Link
              href="https://linktr.ee/ishiid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="sr-only">Portfolio</span>
            </Link>
            <Link href="mailto:dai@jenio.co" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/30 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                I focus on Human-Finance Interaction research, digital identity (eKYC), and innovation at the crossroads
                of finance, AI, and business strategy. Previously at Itochu Corp., I led global fashion brand expansions
                in Europe and Japan, working as an expatriate in the UK and Italy.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                I hold a degree in Mathematics and Fashion History from Kyoto University, combining analytical rigor
                with creative business thinking. My journey spans from developing cutting-edge translation technology to
                pioneering eKYC solutions and international market development.
              </p>
              <p className="text-lg leading-relaxed">
                I share insights regularly through publications, patents, and media, helping organizations navigate
                transformation with clarity and speed. My work bridges cultures and technologies, making complex systems
                accessible and human-centered.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Core Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Fintech Innovation</Badge>
                <Badge variant="secondary">AI & Machine Learning</Badge>
                <Badge variant="secondary">eKYC Solutions</Badge>
                <Badge variant="secondary">Face Recognition</Badge>
                <Badge variant="secondary">International Business</Badge>
                <Badge variant="secondary">Product Development</Badge>
                <Badge variant="secondary">Market Expansion</Badge>
                <Badge variant="secondary">Digital Identity</Badge>
                <Badge variant="secondary">Multilingual Translation</Badge>
                <Badge variant="secondary">Strategic Partnerships</Badge>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Japanese (Native)</Badge>
                <Badge variant="outline">English (Full Professional)</Badge>
                <Badge variant="outline">Italian (Professional Working)</Badge>
                <Badge variant="outline">Korean (Limited Working)</Badge>
                <Badge variant="outline">Chinese (Limited Working)</Badge>
                <Badge variant="outline">Spanish (Limited Working)</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold mb-12">Experience</h2>

            <div className="space-y-12">
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Founder & CEO</h3>
                    <p className="text-muted-foreground">Kiara Inc.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2011 — Present</span>
                </div>
                <p className="leading-relaxed mb-4">
                  Building products that bridge technology and human experience. Kiara Translator is a real-time
                  multilingual translation app for Slack, supporting over 100 languages and enabling seamless
                  communication across language barriers. Successfully deployed for 2,000 social innovators at MIT's
                  global hackathon, translating Spanish and Portuguese in high-stakes environments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Real-Time Translation</Badge>
                  <Badge>Product Innovation</Badge>
                  <Badge>AI Integration</Badge>
                  <Badge>Team Communication</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">International Sales Director</h3>
                    <p className="text-muted-foreground">Liquid Inc.</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2024 — 2025</span>
                </div>
                <p className="leading-relaxed mb-4">
                  Leading digital identity verification solutions through Liquid eKYC, enabling businesses to verify
                  customer identities online quickly and securely. Delivering fast verification processes (within
                  minutes), reducing costs for businesses, and implementing smart technology including face scans and AI
                  to accurately confirm identities and reduce fraud.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>eKYC</Badge>
                  <Badge>Digital Identity</Badge>
                  <Badge>Face Recognition</Badge>
                  <Badge>Business Development</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Product Innovation Director</h3>
                    <p className="text-muted-foreground">CUUSOO SYSTEM</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2009 — 2010</span>
                </div>
                <p className="leading-relaxed mb-4">
                  Spearheaded the revolutionary Cuusoo System, redefining innovation and community engagement in
                  consumer electronics. Collaborated with TEPCO to develop cutting-edge home appliances inspired by user
                  creativity, bridging the gap between ideas and market needs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Product Innovation</Badge>
                  <Badge>Community Engagement</Badge>
                  <Badge>Strategic Partnerships</Badge>
                  <Badge>Consumer Electronics</Badge>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Sales Representative</h3>
                    <p className="text-muted-foreground">ITOCHU Corporation</p>
                  </div>
                  <span className="text-sm text-muted-foreground">1998 — 2009</span>
                </div>
                <p className="leading-relaxed mb-4">
                  Developed strategic business initiatives and international market expansion for renowned global
                  fashion brands including Paul Smith (UK), Replay Jeans, Patrizia Pepe, Freddy, Richard Ginori (Italy),
                  Essential (Belgium), and J.Lindeberg (Sweden). Successfully led cross-cultural projects and
                  partnerships as an expatriate in the UK and Italy, driving brand growth and enhancing market presence
                  across European markets.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>International Business</Badge>
                  <Badge>Fashion Brands</Badge>
                  <Badge>Market Expansion</Badge>
                  <Badge>Cross-Cultural Management</Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/30 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold mb-12">Publications & Patents</h2>

            <div className="grid gap-8">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Machine Learning Engineering Books</h3>
                  <p className="text-muted-foreground mb-4">
                    Authored multiple books on AI and machine learning engineering, including
                    "機械学習エンジニアになりたい人のための本" (Book for Those Who Want to Become Machine Learning
                    Engineers) and "コロナ vs. AI 最新テクノロジーで感染症に挑む" (Corona vs. AI: Challenging Infectious
                    Diseases with Latest Technology).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">AI/ML</Badge>
                    <Badge variant="outline">Technical Writing</Badge>
                    <Badge variant="outline">Education</Badge>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Digital Transformation & Remote Work</h3>
                  <p className="text-muted-foreground mb-4">
                    Published "働き方のデジタルシフト: リモートワークからはじめる、しなやかな組織づくりの処方箋"
                    (Digital Shift in Work Styles: A Prescription for Creating Flexible Organizations Starting with
                    Remote Work), exploring the future of work and organizational transformation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Remote Work</Badge>
                    <Badge variant="outline">Digital Transformation</Badge>
                    <Badge variant="outline">Business Strategy</Badge>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Service Evaluation Patent</h3>
                  <p className="text-muted-foreground mb-4">
                    Invented and patented a system for evaluating services provided by service providers, including the
                    device architecture, methods, and program implementation. This innovation contributes to improving
                    service quality assessment and customer experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Patent</Badge>
                    <Badge variant="outline">Service Innovation</Badge>
                    <Badge variant="outline">Technology</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm always interested in discussing new opportunities, collaborations, and innovative projects at the
              intersection of fintech, AI, and business strategy. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href="mailto:dai@jenio.co">Send me an email</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/dai19980401" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              <p>Mobile: +81-80-6306-2223</p>
              <p>Based in Shibuya-ku, Tokyo, Japan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">© 2026 Dave Ishii. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/dai19980401"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.kiara.team"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Kiara Inc.
              </Link>
              <Link
                href="https://linktr.ee/ishiid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="mailto:dai@jenio.co"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
