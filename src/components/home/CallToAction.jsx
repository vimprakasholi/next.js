const CallToAction = () => {
  return (
    <section id="cta" className="py-12 bg-black/60">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Join Our Newsletters
          </h2>
          <p className="text-slate-200 text-center">
            Subscribe to get the latest updates on our new arrivals and special
            offers.
          </p>
        </div>
        <form className="flex flex-col md:flex-row gap-3 justify-center">
          <input
            className="rounded-lg text-white border px-4 py-3 lg:w-1/3 focus:outline-none focus:ring-2 focus:ring-secondary"
            type="email"
            id="email"
            placeholder="Your email address"
          />
          <button
            className="bg-secondary px-6 py-3 rounded-lg text-white font-medium transition hover:secondary/90"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
