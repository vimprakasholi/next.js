import Image from "next/image";
import bgImage from "@/assets/images/bg.jpg"

const Contact = () => {
  return (
    <section className="py-16 relative">
      <Image
        className="absolute top-0 h-full w-full object-cover -z-20"
        src={bgImage}
        alt={"Background Image"}
        width={1200}
        height={900}
      />
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-black opacity-60" />
      <div className="container mx-auto px-4 relative z-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-semibold text-white uppercase tracking-[.25rem] mb-6">
              Dresses to impress
            </h2>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              soluta debitis ad sint, facilis ut nemo doloribus optio beatae
              rerum libero ratione voluptas itaque voluptates omnis quas a!
              Magnam, cum!
            </p>
          </div>
          <div className="bg-white rounded-2xl px-8 py-10 lg:w-3/4 mx-auto">
            <h3 className="text-3xl font-bold text-center mb-4">
              Contact Form
            </h3>
            <form>
              <div className="pb-2">
                <label htmlFor="name">Full name</label>
                <input
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:border-0 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                  type="text"
                  placeholder="Your Full Name"
                  id="name"
                  required
                />
              </div>
              <div className="pb-2">
                <label htmlFor="email">Email address</label>
                <input
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:border-0 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                  type="email"
                  placeholder="Your Email Address"
                  id="email"
                  required
                />
              </div>
              <div className="pb-2">
                <label htmlFor="phone">Phone number</label>
                <input
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:border-0 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                  type="tel"
                  placeholder="Your Phone Number"
                  id="phone"
                  required
                />
              </div>
              <div className="pb-2">
                <label htmlFor="subject">Subject</label>
                <input
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:border-0 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                  type="subject"
                  placeholder="Subject"
                  id="subject"
                  required
                />
              </div>
              <div className="pb-2">
                <label htmlFor="message">Message</label>
                <textarea
                  className="w-full py-2 px-3 rounded-md border-2 border-zinc-300 focus:border-0 focus:outline-none focus:ring-2 focus:ring-secondary mt-1"
                  type="text"
                  placeholder="Subject"
                  id="message"
                  required
                  defaultValue={""}
                />
              </div>
              <input
                className="bg-primary text-whte px-6 py-2 rounded-lg hover:bg-primary/80"
                type="submit"
                defaultValue="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
