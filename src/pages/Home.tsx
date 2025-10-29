import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Droplets, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-stone.jpg";
import basinsImage from "@/assets/basins.jpg";
import ornamentsImage from "@/assets/ornaments.jpg";
import waterFeaturesImage from "@/assets/water-features.jpg";

const Home = () => {
  const features = [
    {
      title: "Natural Stone Basins",
      description: "Handcrafted basins that bring natural elegance to any space",
      icon: Mountain,
      image: basinsImage,
      link: "/portfolio#basins",
    },
    {
      title: "Bowls & Ornaments",
      description: "Unique decorative pieces carved from natural stone",
      icon: Package,
      image: ornamentsImage,
      link: "/portfolio#ornaments",
    },
    {
      title: "Water Features",
      description: "Stunning stone water features for serene outdoor spaces",
      icon: Droplets,
      image: waterFeaturesImage,
      link: "/portfolio#water-features",
    },
  ];

  const blogPosts = [
    {
      id: "1",
      title: "The Art of Stone Crafting",
      excerpt: "Discover the ancient techniques we use to create modern masterpieces",
      date: "March 15, 2025",
      image: basinsImage,
    },
    {
      id: "2",
      title: "Sustainable Stonework",
      excerpt: "How we ensure our craft respects and preserves nature",
      date: "March 10, 2025",
      image: ornamentsImage,
    },
    {
      id: "3",
      title: "Caring for Your Stone Products",
      excerpt: "Essential tips to maintain the beauty of your handcrafted stone",
      date: "March 5, 2025",
      image: waterFeaturesImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6">
            Where Nature Meets Design
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Handcrafted stone products that blend timeless beauty with sustainable craftsmanship
          </p>
          <Button asChild size="lg" className="shadow-medium">
            <Link to="/portfolio">
              Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Crafted with Passion Since 2012
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Cape Crafted Stone, we transform raw, natural stone into functional art pieces. 
              Each basin, ornament, and water feature is meticulously handcrafted, celebrating 
              the unique textures and patterns that nature provides. Our commitment to sustainability 
              and craftsmanship ensures that every piece tells a story of quality and care.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-stone-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-smooth overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-2xl font-display">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={feature.link}>
                      View Collection <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-muted-foreground">
              Insights, stories, and tips from the world of stone craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-smooth overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="text-xl font-display group-hover:text-primary transition-smooth">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0">
                    <Link to={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
