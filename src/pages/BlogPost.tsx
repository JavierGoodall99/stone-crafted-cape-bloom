import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import basinsImage from "@/assets/basins.jpg";
import ornamentsImage from "@/assets/ornaments.jpg";
import waterFeaturesImage from "@/assets/water-features.jpg";

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts: Record<string, BlogPostData> = {
    "1": {
      id: "1",
      title: "The Art of Stone Crafting: A Journey Through Time",
      content: `Stone crafting is an ancient art that has evolved over millennia, yet the fundamental principles remain timeless. At Cape Crafted Stone, we honor these traditions while incorporating modern techniques to create pieces that are both functional and beautiful.

Our process begins with careful selection of the raw stone. Each piece of stone has its own character, grain patterns, and natural beauty. We spend considerable time examining and understanding the stone before we even begin to shape it.

The crafting process itself is a meditation. Using a combination of power tools and hand chisels, we slowly reveal the form hidden within the stone. It's a process that cannot be rushed - each strike of the chisel, each pass of the grinder, brings us closer to the final vision.

What makes our work special is the attention to detail. We don't just create functional pieces; we create art that brings the raw beauty of nature into your home. The natural textures, the unique patterns, the weight and solidity of stone - these are elements that cannot be replicated with any other material.

Whether it's a basin that will grace a bathroom for decades, a decorative bowl that becomes a family heirloom, or a water feature that transforms a garden into a sanctuary, each piece we create is imbued with care, skill, and respect for the natural world.`,
      date: "March 15, 2025",
      author: "Cape Crafted Stone",
      image: basinsImage,
      category: "Craftsmanship",
    },
    "2": {
      id: "2",
      title: "Sustainable Stonework: Our Commitment to Nature",
      content: `Sustainability isn't just a buzzword for us - it's the foundation of everything we do at Cape Crafted Stone. We believe that working with natural materials comes with a responsibility to respect and preserve the environment.

Our approach to sustainability begins with sourcing. We only work with suppliers who practice responsible quarrying methods. This means working with stones that are extracted with minimal environmental impact, and ensuring that quarry sites are properly managed and eventually restored.

We also focus on minimizing waste in our workshop. Stone offcuts that might otherwise be discarded are repurposed into smaller pieces - decorative items, garden features, or crushed for use in landscaping. Very little goes to waste in our process.

Energy efficiency is another key consideration. While stone crafting does require power tools, we've invested in modern, energy-efficient equipment. We also maximize natural light in our workshop to reduce electricity consumption.

Perhaps most importantly, we create products that last. In a world of disposable goods, a handcrafted stone basin or water feature can last for generations. This longevity is the ultimate form of sustainability - creating something so well-made and beautiful that it never needs to be replaced.

Our commitment extends beyond our workshop. We educate our clients on proper care and maintenance to ensure their stone pieces remain beautiful for decades. We also work with local communities to share knowledge about sustainable practices in stone crafting.`,
      date: "March 10, 2025",
      author: "Cape Crafted Stone",
      image: ornamentsImage,
      category: "Sustainability",
    },
    "3": {
      id: "3",
      title: "Caring for Your Stone Products: Essential Tips",
      content: `Natural stone is incredibly durable, but like any quality product, it benefits from proper care and maintenance. Here are our essential tips for keeping your stone pieces beautiful for years to come.

**Daily Care**

For daily cleaning, less is more. Simply wipe down your stone basin or ornament with a soft, damp cloth. Avoid harsh chemicals or abrasive cleaners, as these can damage the stone's natural finish over time.

**Dealing with Stains**

If you notice a stain, address it promptly. Most stains can be removed with a paste made from baking soda and water. Apply the paste to the stain, let it sit for a few hours, then gently wipe clean. For tougher stains, consult with us for specific recommendations.

**Sealing**

Depending on the type of stone and its location, periodic sealing may be beneficial. Bathroom basins typically benefit from sealing every 1-2 years to protect against water staining. Outdoor pieces may need more frequent sealing depending on exposure to the elements.

**Protection**

Use coasters or mats under items that might scratch or stain the stone. For outdoor pieces, consider covering them during harsh weather conditions, though our pieces are designed to withstand the elements.

**Temperature Considerations**

Avoid exposing your stone pieces to extreme temperature changes. Don't pour boiling water directly into a cold stone basin, as thermal shock can cause cracking.

**Regular Inspection**

Periodically inspect your stone pieces for any signs of damage or wear. Early detection of issues makes them easier to address. If you notice any concerns, don't hesitate to reach out to us for advice.

With proper care, your Cape Crafted Stone pieces will remain beautiful focal points in your home or garden for generations.`,
      date: "March 5, 2025",
      author: "Cape Crafted Stone",
      image: waterFeaturesImage,
      category: "Maintenance",
    },
  };

  const post = blogPosts[id || "1"];

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header */}
      <section className="py-16 bg-stone-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <div className="mb-6">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-medium"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-stone prose-lg">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <Button asChild size="lg">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Articles
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
