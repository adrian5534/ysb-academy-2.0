import CourseCard from './CourseCard'

const courses = [
  {
    title: "Advanced Stock Market Strategies",
    desc: "Master technical analysis, fundamental research, and risk management for profitable stock trading.",
    details: ["Live Market Simulations", "Expert Instructor Support"],
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Crypto Trading Fundamentals",
    desc: "Understand blockchain, cryptocurrency markets, and effective strategies for digital asset trading.",
    details: ["Decentralized Finance (DeFi)", "Beginner to Advanced Modules"],
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Mastering Video Production",
    desc: "Learn professional video editing, cinematography, and storytelling for engaging content creation.",
    details: ["Hands-on Project Work", "Audio Engineering Basics"],
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Effective Blog Writing & SEO",
    desc: "Craft compelling blog posts, optimize for search engines, and drive organic traffic to your content.",
    details: ["Content Strategy Development", "Keyword Research Techniques"],
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "AI for Business Automation",
    desc: "Discover how to leverage AI tools and machine learning for automating tasks and boosting productivity.",
    details: ["Practical AI Implementations", "Workflow Optimization"],
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Shopify Store Launch & Growth",
    desc: "Build, launch, and scale a successful e-commerce store using Shopify, from product sourcing to marketing.",
    details: ["Product Sourcing & Dropshipping", "Digital Marketing Strategies"],
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  }
]

function CourseList() {
  return (
    <div className="course-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
      {courses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </div>
  )
}
export default CourseList