import Container from "../layout/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 to-cyan-600">
      <Container>
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something That Scales
          </h2>
          <p className="text-xl mb-8 text-sky-100 max-w-2xl mx-auto">
            Book a free strategy call with our engineering team. We'll discuss your project, answer your questions, and outline a path forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-sky-600 hover:bg-gray-100">
              Schedule a Call
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
