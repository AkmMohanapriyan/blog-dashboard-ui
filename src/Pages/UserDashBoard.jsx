import Navbar from "../components/Navber"
import Footer from "../components/Footer"

function UserDashBoard() {

    const Blogs = [
        {
            title: "From Zero to Hero",
            content: "Success rarely happens overnight. The journey from being a complete beginner to achieving mastery in any field is filled with challenges, learning opportunities, and personal growth. This blog post explores the fundamental principles and practical steps that can help anyone transform from zero to hero in their chosen pursuit The path from novice to expert is not linear. It involves setting clear goals, developing consistent habits, embracing failure as a learning opportunity, and maintaining resilience through obstacles. Whether you are pursuing career advancement, developing a new skill, or working toward personal transformation, the principles remain similar. The zero to hero journey isn't about overnight transformation but about consistent growth over time. By understanding the stages of mastery, implementing effective strategies, embracing failure, and maintaining momentum, you can achieve remarkable results in any area of life. Remember that every expert was once a beginner. The difference between those who succeed and those who do not often comes down to persistence and willingness to learn. Your hero's journey begins with a single step—take it today.",
            author: "Mr P Kadalarasan",
            date: '2025-06-15'
        },
        {
            title: "A Step-by-Step Guide to Creating a Website",
            content: "Creating your own website might seem daunting at first, but breaking it down into manageable steps makes the process much more approachable. Whether you're building a personal portfolio, a business site, or a blog, this guide will walk you through the essential stages of website creation. Define Your Website's Purpose and Goals. Before diving into design or code, clarify: Primary purpose: Is this a portfolio, e-commerce store, blog, or informational site? Target audience: Who will visit your site and what are their needs? Key objectives: What actions do you want visitors to take? Success metrics: How will you measure if your site is effective?. Creating a website is a journey that combines planning, design, technical implementation, and ongoing maintenance. By following these steps methodically, you'll create a web presence that effectively serves your goals and provides value to your visitors. Remember that websites evolve over time—launch with your minimal viable product, then iterate based on user feedback and changing needs. The most successful websites continuously improve rather than remaining static.",
            author: "Mr K.Thanusan",
            date: '2025-11-22'
        },
        {
            title: "Why You Should Start a Morning Routine",
            content: "A well-crafted morning routine can transform your entire day and, by extension, your life. While it may seem like just another trend in self-improvement, the science and real-world benefits behind morning routines are substantial and worth your consideration. Our brains are most alert and creative in the first few hours after waking. This golden window provides an opportunity to accomplish meaningful work before the demands of the day begin to drain your mental resources. During these early hours, your prefrontal cortex—responsible for decision-making and focus—is at its sharpest. The best routine is one that's sustainable and aligned with your goals. Start small with 2-3 consistent actions, then gradually build. Consider including elements like: 1. A moment of mindfulness or gratitude 2. Light exercise or stretching 3. Planning your days priorities 4. Reading or learning something new 5. A proper breakfast. Remember that the goal is not to pack your morning with activities but to create a sequence that energizes you and sets a positive tone for the day ahead. Your morning routine doesn't need to mirror those of famous CEOs or wellness gurus. The true power lies in consistency and personalization. By taking control of your mornings, you're essentially claiming ownership of your day before external demands can take over. ",
            author: "Mr Cenustan Elosh",
            date: '2025-09-09'
        }
    ]


    return (

        <>

            <Navbar />

            <div className="Main">

                <h1 className="user-Heading">User Blog Dashboard</h1>

                <div className="blog-list">
                    {Blogs.map((blog, index) =>
                        <div key={index} className="blog-card">
                            <h3>{blog.title}</h3>
                            <p>{blog.content.substring(0, 100)}...</p>
                            <p>Author : {blog.author} on {blog.date}</p>

                            <button type="button">Read More</button>
                        </div>

                    )}
                </div>

            </div>

                <Footer/>      

        </>

    )

}

export default UserDashBoard