import { ChevronDown, FileText, Leaf } from "lucide-react";
import { Link } from "wouter";

type ServiceArea = "paisagismo" | "ambiental";

interface SectionLink {
  id: string;
  label: string;
}

interface ServiceQuickNavProps {
  activeArea: ServiceArea;
  sections: SectionLink[];
}

export default function ServiceQuickNav({
  activeArea,
  sections,
}: ServiceQuickNavProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const areaClass = (area: ServiceArea) =>
    `inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
      activeArea === area
        ? "bg-forest text-white"
        : "bg-white text-forest border border-forest/15 hover:border-gold hover:text-gold"
    }`;

  return (
    <div className="sticky top-20 z-40 border-b border-gold/20 bg-[#f8f5f0] shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-5">
          <div className="flex items-center justify-center gap-2">
            <Link href="/servicos/paisagismo" className={areaClass("paisagismo")}>
              <Leaf className="w-4 h-4" />
              Paisagismo
            </Link>
            <Link
              href="/servicos/consultoria-ambiental"
              className={areaClass("ambiental")}
            >
              <FileText className="w-4 h-4" />
              Ambiental
            </Link>
          </div>

          <div className="hidden lg:block h-7 w-px bg-forest/15" />

          <div className="flex max-w-full items-center gap-1 overflow-x-auto pb-1 lg:pb-0">
            <span className="text-xs font-medium uppercase tracking-wide text-forest/45 whitespace-nowrap mr-1">
              Ir para
            </span>
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollTo(section.id)}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-forest/75 whitespace-nowrap hover:bg-gold/10 hover:text-forest transition-colors"
              >
                {section.label}
                <ChevronDown className="w-3.5 h-3.5 text-gold" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
