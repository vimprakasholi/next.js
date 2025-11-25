import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import michal from "@/assets/images/customers/michal.jpg";
import mira from "@/assets/images/customers/mira.jpg";
import michel from "@/assets/images/customers/michel.jpg";
import roman from "@/assets/images/customers/roman.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 text-center">
            Hear from our satisfied customers what they say about us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition p-6">
            <div className="text-slate-400 text-lg">
              <i className="fa fa-quote-right" />
            </div>
            <p className="text-sm text-slate-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              dolor temporibus ut ducimus quas atque iusto incidunt amet
              corporis molestias? Alias cumque possimus rerum at voluptatem quod
              veritatis provident eos illum pariatur nulla, inventore sit
              eveniet dicta labore officia laudantium.
            </p>
            <div className="text-yellow-500 text-sm py-3 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-3">
              <Image
                width={64}
                height={64}
                className="h-12 w-12 object-cover rounded-full border border-slate-400"
                src={michal}
                alt="Testimonial Image"
              />
              <div>
                <h4 className="font-bold">Michael Faraday</h4>
                <p className="text-xs text-slate-500">Satisfied Customer</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition p-6">
            <div className="text-slate-400 text-lg">
              <i className="fa fa-quote-right" />
            </div>
            <p className="text-sm text-slate-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              dolor temporibus ut ducimus quas atque iusto incidunt amet
              corporis molestias? Alias cumque possimus rerum at voluptatem quod
              veritatis provident eos illum pariatur nulla, inventore sit
              eveniet dicta labore officia laudantium.
            </p>
            <div className="text-yellow-500 text-sm py-3 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-3">
              <Image
                width={64}
                height={64}
                className="h-12 w-12 object-cover rounded-full border border-slate-400"
                src={mira}
                alt="Testimonial Image"
              />
              <div>
                <h4 className="font-bold">Meera Taode</h4>
                <p className="text-xs text-slate-500">Satisfied Customer</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition p-6">
            <div className="text-slate-400 text-lg">
              <i className="fa fa-quote-right" />
            </div>
            <p className="text-sm text-slate-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              dolor temporibus ut ducimus quas atque iusto incidunt amet
              corporis molestias? Alias cumque possimus rerum at voluptatem quod
              veritatis provident eos illum pariatur nulla, inventore sit
              eveniet dicta labore officia laudantium.
            </p>
            <div className="text-yellow-500 text-sm py-3 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-3">
              <Image
                width={64}
                height={64}
                className="h-12 w-12 object-cover rounded-full border border-slate-400"
                src={michel}
                alt="Testimonial Image"
              />
              <div>
                <h4 className="font-bold">Ritchel Saira</h4>
                <p className="text-xs text-slate-500">Satisfied Customer</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg shadow-md hover:shadow-lg transition p-6">
            <div className="text-slate-400 text-lg">
              <i className="fa fa-quote-right" />
            </div>
            <p className="text-sm text-slate-600 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              dolor temporibus ut ducimus quas atque iusto incidunt amet
              corporis molestias? Alias cumque possimus rerum at voluptatem quod
              veritatis provident eos illum pariatur nulla, inventore sit
              eveniet dicta labore officia laudantium.
            </p>
            <div className="text-yellow-500 text-sm py-3 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex items-center gap-3">
              <Image
                width={64}
                height={64}
                className="h-12 w-12 object-cover rounded-full border border-slate-400"
                src={roman}
                alt="Testimonial Image"
              />
              <div>
                <h4 className="font-bold">Roman Regmi</h4>
                <p className="text-xs text-slate-500">Satisfied Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
