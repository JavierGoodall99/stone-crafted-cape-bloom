import { Target, Eye, Heart } from "lucide-react";
import heroImage from "@/assets/hero-stone.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
            About Us
          </h1>
          <p className="text-xl text-primary-foreground/90">
            The Story Behind the Stone
          </p>
        </div>
      </section>

      {/* Full Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8 text-center">
              The Full Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Founded in 2012, Cape Crafted Stone began with a simple yet profound vision: 
                to bring the raw beauty of nature into homes and spaces through the art of stone 
                craftsmanship. What started as a passion project has evolved into a thriving 
                business that celebrates the timeless elegance of handcrafted stone products.
              </p>
              <p className="text-lg leading-relaxed">
                Each piece we create is born from a deep respect for natural materials. We 
                carefully source our stone, ensuring that every basin, ornament, and water 
                feature showcases the unique textures, colors, and patterns that only nature 
                can provide. Our artisans spend countless hours shaping and refining each piece, 
                transforming raw stone into functional works of art.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment extends beyond craftsmanship to sustainability. We believe in 
                working with nature, not against it. By using sustainable practices and 
                honoring the natural form of the stone, we create products that are as 
                environmentally conscious as they are beautiful.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Cape Crafted Stone continues to innovate while staying true to traditional 
                techniques. We serve clients who appreciate the value of handmade quality and 
                the irreplaceable character that comes from pieces shaped by human hands. 
                Every product tells a story—of the stone itself, of the artisan who crafted it, 
                and of the natural world that inspired it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-stone-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-card p-8 rounded-lg shadow-soft">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-3xl font-display font-bold">Our Vision</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To be recognized as the leading artisan of handcrafted stone products in South Africa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To inspire a deeper appreciation for natural materials and sustainable craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To create timeless pieces that connect people with the beauty of nature</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To preserve traditional stone crafting techniques while embracing innovation</span>
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-card p-8 rounded-lg shadow-soft">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-3xl font-display font-bold">Our Mission</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Craft exceptional stone products that blend functionality with artistic beauty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Source materials responsibly and work with sustainable practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Provide personalized service and custom designs tailored to each client's vision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Maintain the highest standards of quality and craftsmanship in every piece</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-display font-bold mb-8">
              What We Value
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-display font-semibold mb-3">Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Every piece is meticulously handcrafted with attention to detail and pride
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-3">Sustainability</h3>
                <p className="text-muted-foreground">
                  We honor nature through responsible sourcing and eco-friendly practices
                </p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-3">Authenticity</h3>
                <p className="text-muted-foreground">
                  Each creation celebrates the unique character of natural stone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
