import Image from "next/image";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import { fetchTestimonials } from "@/lib/api";

const avatarImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
];

export default async function Testimonials() {
  const testimonials = await fetchTestimonials();

  return (
    <section className="py-24 section-bg global-bg-pattern dark:section-bg-dark dark:global-bg-pattern-dark relative overflow-hidden">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover"
          quality={30}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Testimonials"
          description="Don't just take our word for it—hear from the teams we've helped succeed"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} variant="testimonial" hover className="relative">
              {/* Unique Quote Design - Curved Quote Mark */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-xl transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300">
                <span className="relative -top-1">"</span>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-500/10 to-transparent rounded-bl-full"></div>
              
              <div className="pt-8">
                {/* Avatar with Unique Border */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-sky-100 dark:ring-sky-900 shadow-lg group-hover:ring-sky-300 dark:group-hover:ring-sky-700 transition-all">
                    <Image
                      src={avatarImages[index % avatarImages.length]}
                      alt={testimonial.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      quality={85}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Testimonial Text with Unique Styling */}
                <div className="relative mb-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-base relative pl-4 border-l-4 border-sky-500">
                    {testimonial.content}
                  </p>
                </div>
                
                {/* Stars with Animation */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 group-hover:scale-110 transition-transform" 
                      style={{ animationDelay: `${i * 100}ms` }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                {/* Company Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 dark:bg-sky-900/30 rounded-full">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <p className="text-xs font-semibold text-sky-700 dark:text-sky-300">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
