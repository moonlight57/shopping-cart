export default function Shop({ children }) {
  return (
    <section className="w-[70%] mx-auto my-8">
      <h2 className="text-2xl uppercase text-text-muted font-merriweather mb-8">
        Elegant Clothing For Everyone
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none m-0 p-0">
        {children}
      </ul>
    </section>
  );
}
