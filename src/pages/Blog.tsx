import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import basinsImage from "@/assets/basins.jpg";
import ornamentsImage from "@/assets/ornaments.jpg";
import waterFeaturesImage from "@/assets/water-features.jpg";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Art of Stone Crafting: A Journey Through Time",
      excerpt: "Discover the ancient techniques we use to create modern masterpieces. From selecting the perfect stone to the final polish, learn about our meticulous process.",
      date: "March 15, 2025",
      author: "Cape Crafted Stone",
      image: basinsImage,
      category: "Craftsmanship",
    },
    {
      id: "2",
      title: "Sustainable Stonework: Our Commitment to Nature",
      excerpt: "How we ensure our craft respects and preserves nature. Explore our sustainable practices and eco-friendly approach to stone craftsmanship.",
      date: "March 10, 2025",
      author: "Cape Crafted Stone",
      image: ornamentsImage,
      category: "Sustainability",
    },
    {
      id: "3",
      title: "Caring for Your Stone Products: Essential Tips",
      excerpt: "Essential tips to maintain the beauty of your handcrafted stone. Learn how to clean, protect, and preserve your stone products for years to come.",
      date: "March 5, 2025",
      author: "Cape Crafted Stone",
      image: waterFeaturesImage,
      category: "Maintenance",
    },
    {
      id: "4",
      title: "Designing with Natural Stone: Inspiration Guide",
      excerpt: "Transform your space with the timeless beauty of natural stone. Get inspired by stunning design ideas and real-world applications.",
      date: "February 28, 2025",
      author: "Cape Crafted Stone",
      image: basinsImage,
      category: "Design",
    },
    {
      id: "5",
      title: "Water Features: Creating Serenity in Your Garden",
      excerpt: "The peaceful sound of flowing water can transform any outdoor space. Learn how to choose and maintain the perfect stone water feature.",
      date: "February 22, 2025",
      author: "Cape Crafted Stone",
      image: waterFeaturesImage,
      category: "Water Features",
    },
    {
      id: "6",
      title: "Custom Stone Basins: From Concept to Creation",
      excerpt: "Follow the journey of a custom basin from initial sketch to finished product. See how we bring your unique vision to life.",
      date: "February 15, 2025",
      author: "Cape Crafted Stone",
      image: ornamentsImage,
      category: "Custom Work",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="py-16 bg-stone-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stories, insights, and tips from the world of stone craftsmanship
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-medium">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <CardHeader className="flex flex-col justify-center p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {blogPosts[0].author}
                    </span>
                  </div>
                  <CardTitle className="text-3xl font-display mb-4">
                    {blogPosts[0].title}
                  </CardTitle>
                  <CardDescription className="text-base mb-6">
                    {blogPosts[0].excerpt}
                  </CardDescription>
                  <Button asChild className="w-fit">
                    <Link to={`/blog/${blogPosts[0].id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={post.id}
                className="group hover:shadow-medium transition-smooth overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-display group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0 group">
                    <Link to={`/blog/${post.id}`}>
                      Read More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-stone-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest articles, product updates, and stone crafting tips
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
