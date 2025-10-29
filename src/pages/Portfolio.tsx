import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import basinsImage from "@/assets/basins.jpg";
import ornamentsImage from "@/assets/ornaments.jpg";
import waterFeaturesImage from "@/assets/water-features.jpg";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  dimensions: string;
}

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: "basin-1",
      title: "Oval Stone Basin",
      category: "basins",
      image: basinsImage,
      description: "A beautifully crafted oval basin featuring natural stone textures and smooth edges. Perfect for modern bathrooms seeking an organic touch.",
      dimensions: "60cm x 40cm x 15cm",
    },
    {
      id: "basin-2",
      title: "Round Vessel Basin",
      category: "basins",
      image: basinsImage,
      description: "Round vessel basin with unique natural patterns. Each piece is one-of-a-kind, showcasing the stone's natural beauty.",
      dimensions: "45cm diameter x 12cm",
    },
    {
      id: "basin-3",
      title: "Rectangular Stone Basin",
      category: "basins",
      image: basinsImage,
      description: "Contemporary rectangular basin with clean lines and organic texture. Ideal for minimalist spaces.",
      dimensions: "70cm x 45cm x 14cm",
    },
    {
      id: "ornament-1",
      title: "Decorative Stone Bowl",
      category: "ornaments",
      image: ornamentsImage,
      description: "Hand-carved decorative bowl perfect for centerpieces. Features smooth interior and natural exterior texture.",
      dimensions: "35cm diameter x 10cm",
    },
    {
      id: "ornament-2",
      title: "Stone Sculpture",
      category: "ornaments",
      image: ornamentsImage,
      description: "Abstract stone sculpture that celebrates natural forms. A statement piece for any interior.",
      dimensions: "30cm x 25cm x 40cm",
    },
    {
      id: "ornament-3",
      title: "Carved Stone Planter",
      category: "ornaments",
      image: ornamentsImage,
      description: "Unique stone planter with drainage, perfect for succulents and small plants.",
      dimensions: "40cm x 30cm x 20cm",
    },
    {
      id: "water-1",
      title: "Tiered Water Fountain",
      category: "water-features",
      image: waterFeaturesImage,
      description: "Three-tier natural stone fountain creating a peaceful atmosphere. Complete with pump system.",
      dimensions: "80cm x 80cm x 120cm",
    },
    {
      id: "water-2",
      title: "Wall Water Feature",
      category: "water-features",
      image: waterFeaturesImage,
      description: "Elegant wall-mounted water feature with cascading design. Perfect for patios and gardens.",
      dimensions: "60cm x 20cm x 90cm",
    },
    {
      id: "water-3",
      title: "Garden Water Bowl",
      category: "water-features",
      image: waterFeaturesImage,
      description: "Large stone bowl water feature with gentle overflow. Creates a serene focal point.",
      dimensions: "90cm diameter x 40cm",
    },
  ];

  const categories = [
    { id: "all", name: "All Work" },
    { id: "basins", name: "Natural Stone Basins" },
    { id: "ornaments", name: "Bowls & Ornaments" },
    { id: "water-features", name: "Water Features" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="py-16 bg-stone-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of handcrafted stone products, each piece telling its own unique story
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-body font-medium transition-smooth ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-secondary text-secondary-foreground hover:bg-stone-medium"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-smooth">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                      <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">Click to view details</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-display">{selectedItem.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedItem.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Dimensions:</span> {selectedItem.dimensions}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Category:</span>{" "}
                    {categories.find(c => c.id === selectedItem.category)?.name}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
