import { motion } from "framer-motion";
import { Linkedin, ArrowRight, Calendar, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample LinkedIn posts data - can be updated with real posts
const linkedInPosts = [
  {
    id: 1,
    date: "January 2025",
    excerpt: "A major milestone for Mint & Honey! Our Atlantis agro-processing facility is taking shape. This is more than a build—it's about food security, jobs, and empowering communities across Africa.",
    likes: 127,
    comments: 23,
    shares: 45,
    featured: true
  },
  {
    id: 2,
    date: "December 2024",
    excerpt: "Proudly nourishing communities across South Africa. Our fortified cereals are reaching more schools, ECD centres, and feeding programs every day.",
    likes: 89,
    comments: 12,
    shares: 28,
    featured: false
  },
  {
    id: 3,
    date: "November 2024",
    excerpt: "Quality meets purpose. Our HACCP-certified facility ensures every batch of Super Cereal Plus meets international standards for nutrition and safety.",
    likes: 156,
    comments: 31,
    shares: 67,
    featured: false
  }
];

export const LinkedInFeed = () => {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="wp-badge mb-4 bg-[#0077B5]/10 text-[#0077B5]">
            <Linkedin className="h-4 w-4" />
            Follow Our Journey
          </span>
          <h2 className="mb-4 font-display text-foreground section-divider">
            Connect With Us on LinkedIn
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Stay updated with our latest milestones, industry insights, and the impact 
            we're making across African communities.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[#0077B5]/5 to-transparent p-8 md:p-12">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-[#0077B5]/10" />
            <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-6 translate-y-6 rounded-full bg-mint/10" />
            
            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0077B5] text-white">
                  <Linkedin className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Mint & Honey
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Food Manufacturing | Cape Town, South Africa
                  </p>
                </div>
                <span className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {linkedInPosts[0].date}
                </span>
              </div>

              <blockquote className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
                "{linkedInPosts[0].excerpt}"
              </blockquote>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    {linkedInPosts[0].likes} likes
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    {linkedInPosts[0].comments} comments
                  </span>
                  <span className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    {linkedInPosts[0].shares} shares
                  </span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/company/mint-honey/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on LinkedIn
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Posts Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {linkedInPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-card"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0077B5]/10 text-[#0077B5]">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
              </div>
              
              <p className="mb-6 text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Share2 className="h-4 w-4" />
                  {post.shares}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="xl" 
            className="bg-[#0077B5] text-white hover:bg-[#006396]"
            asChild
          >
            <a 
              href="https://www.linkedin.com/company/mint-honey/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              View All LinkedIn Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
