import Image from "next/image";

export default function TrustBar() {
  const companies = [
    { name: "TechScale Inc.", logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop" },
    { name: "StartupHub", logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
    { name: "Enterprise Solutions", logo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" },
    { name: "CloudFirst", logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop" },
    { name: "DataDriven Co.", logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
  ];

  return (
    <section className="py-16 section-bg global-bg-pattern dark:section-bg-dark dark:global-bg-pattern-dark border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-10">
          Trusted by startups & growing teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center w-32 h-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 group-hover:shadow-md transition-shadow"></div>
              <div className="relative w-24 h-12 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-sky-100 to-cyan-100 dark:from-sky-900 dark:to-cyan-900 rounded flex items-center justify-center text-xs font-bold text-sky-700 dark:text-sky-300">
                  {company.name.split(' ')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Join 500+ companies building with Neptune
          </p>
        </div>
      </div>
    </section>
  );
}
