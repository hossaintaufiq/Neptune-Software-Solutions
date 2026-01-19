export default function TrustBar() {
  const companies = [
    "TechScale Inc.",
    "StartupHub",
    "Enterprise Solutions",
    "CloudFirst",
    "DataDriven Co.",
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
          Trusted by startups & growing teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-gray-400 dark:text-gray-500 font-medium text-lg"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
