import Test from "@/public/images/test.png";
import Image from "next/image";

export default function Conclusion() {
  return (
    <section className="relative">
      <div className="py-20 md:py-32">
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <div className="col-span-6 lg:col-span-3">
            <h2 className="h3 mb-5 text-blue-500">
              Who's right for Labyrinth...and who isn't?
            </h2>

            <p className="mb-3 text-xl font-montreal text-blue-500">
              The average Labyrinth member has $1.5M in annual revenue, but we
              have a minimum requirement of at least $100K in revenue or a
              previous exit. Most members are food & beverage store owners and
              you must be a founder or CEO. Your 8-person Mastermind group will
              have similar sized businesses in similar industries.
            </p>
            <p className="mb-3 text-xl font-montreal text-blue-500">
              Each applicant is interviewed and highly vetted with a low
              acceptance rate. To keep Hampton intimate we're limiting the
              community to only 50 new Mastermind groups.
            </p>

            <p className="mb-3 text-xl font-montreal text-blue-500">
              Ok, enough talking. Let's get to it. Apply below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
