import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import { fetchTestimonials } from "@/lib/api";

export default async function Testimonials() {
  const testimonials = await fetchTestimonials();

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Testimonials"
          description="Don't just take our word for it—hear from the teams we've helped succeed"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} hover>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
