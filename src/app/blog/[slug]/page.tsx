import { BreadCrumb } from "@/src/components/ui/Breadcrump";
import connectDB from "@/src/db/mongoose";
import Post, { IPost } from "@/src/models/Blog";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string): Promise<IPost | null> {
  await connectDB();
  const post = await Post.findOne({ slug }).lean();
  return post as IPost | null;
}

function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function getInitials(name = "Anonymous"): string {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

function BlogContent() {
  return (
    <div className="space-y-10 text-[15px] text-[#999] leading-relaxed">
      <section>
        <h2 className="font-primary text-xl font-bold text-[#f0f0f0] mb-3 pb-2 border-b border-[#2a2a2a]">
          Introduction
        </h2>
        <p>
          Every developer needs a place to show their work — a portfolio that speaks for itself.
          I built mine not just to display projects, but to challenge myself to use a real
          full-stack setup from scratch. This project pushed me to learn how the front end and
          back end connect, how to manage data, and how to build something that actually works
          in production.
        </p>
        <p className="mt-3">
          My goal as a full-stack developer is to build clean, functional, and well-structured
          applications. This portfolio was the perfect starting point — something personal,
          something I would actually use, and something that forced me to solve real problems.
        </p>
      </section>

      <section>
        <h2 className="font-sans text-xl font-bold text-[#f0f0f0] mb-3 pb-2 border-b border-[#2a2a2a]">
          Tech Stack Overview
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-[#ddd] font-semibold mb-1">Next.js (App Router)</h3>
            <p>
              I chose Next.js because it gives me both front-end rendering and back-end API routes
              in one project. The App Router made it easy to organise pages, handle dynamic routes
              like <code className="bg-[#252525] text-[#ccc] px-1.5 py-0.5 rounded text-[12px] font-mono">/blog/[slug]</code>, and fetch data directly in server components without extra boilerplate.
            </p>
          </div>
          <div>
            <h3 className="text-[#ddd] font-semibold mb-1">Tailwind CSS</h3>
            <p>
              Tailwind lets me style components quickly without switching between files. Instead of
              writing separate CSS, I apply utility classes directly in JSX. It keeps things fast,
              consistent, and easy to read.
            </p>
          </div>
          <div>
            <h3 className="text-[#ddd] font-semibold mb-1">MongoDB + Mongoose</h3>
            <p>
              MongoDB is a flexible NoSQL database — perfect for a portfolio where data structures
              can change over time. Mongoose adds structure on top of it with schemas and models,
              making it easier to validate and query data in a predictable way.
            </p>
          </div>
          <div>
            <h3 className="text-[#ddd] font-semibold mb-1">Zod</h3>
            <p>
              Zod handles validation on the server side. Before saving any form data to the
              database, I run it through a Zod schema to make sure the data is the right shape.
              It catches errors early and gives clear messages when something is wrong.
            </p>
            <pre className="mt-3 bg-[#161616] border border-[#2e2e2e] rounded-lg p-4 text-[12px] font-mono text-[#ccc] overflow-x-auto">
              {`const contactSchema = z.object({
                name: z.string().min(1, "Name is required"),
                email: z.string().email("Invalid email"),
                message: z.string().min(10, "Message too short"),
              });`}
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-sans text-xl font-bold text-[#f0f0f0] mb-3 pb-2 border-b border-[#2a2a2a]">
          Project Structure
        </h2>
        <p className="mb-3">
          Keeping the project organised made it much easier to navigate as it grew. Here is the
          main folder structure I used:
        </p>
        <pre className="bg-[#161616] border border-[#2e2e2e] rounded-lg p-4 text-[12px] font-mono text-[#ccc] overflow-x-auto">
          {`portfolio/
            ├── app/                  # Pages and API routes (App Router)
            │   ├── page.tsx          # Home page
            │   ├── blog/             # Blog listing and post pages
            │   ├── projects/         # Projects showcase
            │   └── api/              # Backend API routes
            │       ├── contact/
            │       └── blog/
            ├── components/           # Reusable UI components
            │   ├── BlogCard.tsx
            │   ├── Navbar.tsx
            │   └── LatestPosts.tsx
            ├── models/               # Mongoose schemas
            │   └── Blog.ts
            ├── lib/ or utils/        # Helper functions, DB connection
            │   └── mongoose.ts
            └── public/               # Static assets`
          }
        </pre>
        <p className="mt-3">
          Separating models, components, and API routes into their own folders meant I always
          knew where to look when something needed fixing.
        </p>
      </section>

      <section>
        <h2 className="font-sans text-xl font-bold text-[#f0f0f0] mb-3 pb-2 border-b border-[#2a2a2a]">
          Features of the Portfolio
        </h2>
        <ul className="space-y-3 list-none">
          {[
            ["Dynamic Skills Section", "Skills are stored and rendered dynamically so I can update them without touching the layout code."],
            ["Project Showcase", "Each project has its own card with a title, description, tech stack tags, and links. The data is easy to update."],
            ["Contact Form with API", "The contact form sends data to a Next.js API route, validates it with Zod, and saves it to MongoDB. No third-party form service needed."],
            ["Responsive Design", "Every section is built mobile-first with Tailwind. It works cleanly on phones, tablets, and desktops."],
            ["Clean UI", "A dark theme with consistent spacing, monospace fonts for code, and subtle hover interactions keeps the design focused and readable."],
          ].map(([title, desc]) => (
            <li key={title} className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#555] shrink-0" />
              <span><span className="text-[#ddd] font-semibold">{title} — </span>{desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-sans text-xl font-bold text-[#f0f0f0] mb-3 pb-2 border-b border-[#2a2a2a]">
          Challenges I Faced
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-[#ddd] font-semibold mb-1">Connecting MongoDB in a serverless environment</h3>
            <p>
              Every time the server restarted, it was opening a new database connection. This caused
              timeouts and slowdowns. The fix was to cache the connection globally so it gets reused:
            </p>
            <pre className="mt-3 bg-[#161616] border border-[#2e2e2e] rounded-lg p-4 text-[12px] font-mono text-[#ccc] overflow-x-auto">
              {`const cached = global._mongooseCache ?? { conn: null, promise: null };
                if (!cached.promise) {
                  cached.promise = mongoose.connect(MONGODB_URI);
                }
                cached.conn = await cached.promise;`
              }
            </pre>
          </div>
          <div>
            <h3 className="text-[#ddd] font-semibold mb-1">Managing reusable components</h3>
            <p>
              Early on I was copying the same card layout into multiple pages. I refactored it into
              a single <code className="bg-[#252525] text-[#ccc] px-1.5 py-0.5 rounded text-[12px] font-mono">BlogCard</code> component that accepts props — much cleaner and easier to maintain.
            </p>
          </div>
          <div>
            <h3 className="text-[#ddd] font-semibold mb-1">Validation errors</h3>
            <p>
              Before adding Zod, bad form data was reaching the database. After adding schema
              validation on the API route, errors are caught immediately and returned with a clear
              message before anything gets saved.
            </p>
          </div>
          <div>
            <h3 className="text-[#ddd] font-semibold mb-1">Folder structure confusion</h3>
            <p>
              Next.js 15 App Router has specific rules — for example, you cannot have two dynamic
              folders like <code className="bg-[#252525] text-[#ccc] px-1.5 py-0.5 rounded text-[12px] font-mono">[id]</code> and <code className="bg-[#252525] text-[#ccc] px-1.5 py-0.5 rounded text-[12px] font-mono">[slug]</code> at the same level. Learning these rules early
              saved a lot of debugging time later.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-sans text-xl font-bold text-[#f0f0f0] mb-3 pb-2 border-b border-[#2a2a2a]">
          What I Learned
        </h2>
        <ul className="space-y-3 list-none">
          {[
            ["Full-stack workflow", "Building both the UI and the API in one project gave me a much clearer picture of how data flows from the database to the screen."],
            ["Component reusability", "Breaking the UI into small, focused components made the codebase easier to read, update, and debug."],
            ["API handling", "Writing my own API routes taught me how requests and responses work, how to handle errors properly, and how to structure endpoints cleanly."],
            ["Database integration", "Using Mongoose schemas taught me to think carefully about data shape before writing any code — a habit that saves time later."],
          ].map(([title, desc]) => (
            <li key={title} className="flex gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#555] shrink-0" />
              <span><span className="text-[#ddd] font-semibold">{title} — </span>{desc}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-sans text-xl font-bold text-[#f0f0f0] mb-3 pb-2 border-b border-[#2a2a2a]">
          Conclusion
        </h2>
        <p>
          Building this portfolio was one of the most practical things I have done as a developer.
          It is not just a showcase — it is proof that I can design, build, and ship a full-stack
          application on my own. Every bug I hit taught me something, and every feature I shipped
          gave me more confidence.
        </p>
        <p className="mt-3">
          Next, I want to add MDX support so I can write richer blog posts with live code examples,
          improve the admin experience for managing posts, and add animations to make the UI feel
          more polished. There is always something to improve — and that is exactly what keeps
          this interesting.
        </p>
      </section>

    </div>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const isPortfolioPost = slug === "how-i-built-my-full-stack-portfolio-with-nextjs";

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-10 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-8">
        <BreadCrumb postTitle={post.title} />
        <span className="text-xs font-mono text-[#555]">
          {formatDate(post.publishedAt)}
        </span>
      </div>
      <article className="max-w-6xl mx-auto bg-[#1c1c1c] border border-[#2e2e2e] rounded-xl overflow-hidden">
        <div className="px-8 pt-8 pb-6 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-1.25 h-1.25 rounded-full bg-white shrink-0" />
            <time className="text-[12px] text-[#888] font-mono tracking-widest">
              {formatDate(post.publishedAt)}
            </time>
          </div>

          {post.author && (
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-[#252525] border border-[#3a3a3a] flex items-center justify-center text-[11px] font-mono font-semibold text-[#bbb]">
                {getInitials(post.author)}
              </div>
              <span className="text-[14px] font-mono text-[#666]">
                {post.author}
              </span>
            </div>
          )}

          <h1 className="font-primary text-3xl md:text-4xl font-bold text-[#f0f0f0] leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-[15px] text-[#888] leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-[#2e2e2e] text-[#666]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="px-8 py-8">
          {isPortfolioPost ? (
            <BlogContent />
          ) : (
            <p className="text-[#555] font-mono text-sm">No content yet.</p>
          )}
        </div>

        <div className="px-8 py-5 border-t border-[#2a2a2a] flex items-center justify-between">
          <Link
            href="/blog"
            className="text-[11px] font-mono text-[#555] hover:text-white transition-colors"
          >
            ← All posts
          </Link>
          <span className="text-[11px] font-mono text-[#444]">
            {post.author ?? "Anonymous"}
          </span>
        </div>
      </article>
    </main>
  );
}