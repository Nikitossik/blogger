function ArticleTag({ name }) {
  return (
    <a
      href="#"
      className="rounded-lg bg-primary-500 text-primary-800 text-sm font-medium py-0.5 px-2"
    >
      #{name}
    </a>
  );
}

function ArticleCard({ title, tags, desc, coverImage }) {
  return (
    <div className="bg-primary-800/10">
      <div className="overflow-hidden rounded-t-xl">
        <img src={coverImage} alt={title} />
        <div className="p-4 flex flex-col items-start basis-full text-text-neutral">
          <h3 className="text-[22px] mb-4 font-medium leading-none">{title}</h3>
          <div className="flex gap-2.5 items-start mb-2">
            {tags.map((tag, tagIdx) => (
              <ArticleTag name={tag} key={tagIdx} />
            ))}
          </div>
          <p className="mb-4">{desc}</p>
          <a
            href="#"
            className="bg-primary-500 text-text-neutral py-2.5 px-6 rounded-full text-sm/relaxed transition hover:bg-primary-400 focus:ring-primary-500 focus:ring-2 focus:ring-offset-4"
          >
            Read
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
