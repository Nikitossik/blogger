function NewsLetter() {
  return (
    <section className="py-24">
      <div className="max-w-[972px] px-4 mx-auto flex gap-4 justify-between">
        <div className="basis-[466px] text-text-neutral">
          <h2 className="font-medium text-4xl leading-none mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-[22px]">
            Get the latest updates on the newest articles to enhance the quality
            of your daily life
          </p>
        </div>
        <div className="basis-[392px] gap-5">
          <form action="#" className="flex flex-col items-start gap-5">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-primary-800/10 rounded-t-sm border-b-2 border-primary-800 text-text-neutral transition hover:bg-primary-800/15 focus:outline-2 focus:outline-primary-700"
            />
            <button
              type="submit"
              className="bg-primary-700 text-neutral py-2.5 px-6 rounded-[14px] text-sm/relaxed transition hover:bg-primary-600 focus:ring-primary-700 focus:ring-2 focus:ring-offset-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
