import { Link } from "wouter";

type Item = { href: string; title: string; text: string };

export default function BlogRelated({ items }: { items: Item[] }) {
  return (
    <section className="py-16 bg-emerald-dark/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-cinzel text-emerald-dark text-center mb-8">Leia Também</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group">
              <h3 className="font-cinzel text-emerald-dark group-hover:text-gold transition-colors">{i.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{i.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
