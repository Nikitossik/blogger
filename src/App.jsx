import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";
import NewsLetter from "./components/NewsLetter";

import hero from "./assets/hero.png";
import article_1 from "./assets/articles/1.png";
import article_2 from "./assets/articles/2.png";
import article_3 from "./assets/articles/3.png";

const articles = [
  {
    id: 1,
    title: "Morning Habits for a Productive Day",
    tags: ["health", "productivity"],
    desc: "Start your day right with simple habits that set the tone for productivity, focus, and positive energy.",
    coverImage: article_1,
  },
  {
    id: 2,
    title: "The Power of Daily Journaling for Personal Growth",
    tags: ["self-Improvement", "inspiration"],
    desc: "Discover how journaling can help you track your progress, reflect on your goals, and stay motivated",
    coverImage: article_2,
  },
  {
    id: 3,
    title: "Simple Tips to Improve Your Mental Clarity and Focus",
    tags: ["health", "productivity", "self-Improvement"],
    desc: "Learn effective techniques to clear your mind and boost concentration, perfect for both work and personal life.",
    coverImage: article_3,
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header></Header>
      <main className="flex-auto bg-primary">
        <section className="pt-48">
          <div className="max-w-6xl px-4 mx-auto">
            <div className="flex items-center gap-6">
              <div className="basis-[466px] grow-0 text-text-neutral">
                <h1 className="font-medium text-[45px] leading-none mb-4">
                  Welcome to my personal lifestyle blog
                </h1>
                <p className="text-2xl mb-4">
                  Explore the best tips for improving your everyday life
                </p>
                <a
                  href="#"
                  className="bg-primary-700 text-neutral py-2.5 px-6 rounded-[14px] text-sm/relaxed transition hover:bg-primary-600 focus:ring-primary-700 focus:ring-2 focus:ring-offset-4"
                >
                  Explore
                </a>
              </div>
              <div className="flex-auto">
                <img src={hero} alt="Hero image" />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-12">
          <div className="max-w-6xl px-4 mx-auto">
            <h2 className="font-medium text-[32px] leading-none mb-9">
              Popular articles
            </h2>
            <div className="grid grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard {...article} key={article.id} />
              ))}
            </div>
          </div>
        </section>
        <NewsLetter />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
