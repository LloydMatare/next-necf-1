import React from "react";
import {Mail, Phone} from "lucide-react";
import {MdLocationPin} from "react-icons/md";

function ContactForm() {
  return (
    <div>
      <section className="bg-white dark:bg-emerald-950 rounded-lg">
        <div className="container px-6 py-12 mx-auto rounded-lg">
          <div>
            <p className="font-medium text-green-500 dark:text-green-400">
              Contact us
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Get in touch
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Our friendly team would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-gray-800">
                <Mail className={"text-green-500 dark:text-green-400"} size={18} />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <p className="mt-2 text-sm text-green-500 dark:text-green-400">
                  info@necf.co.zw
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-gray-800">
                 <MdLocationPin className={"text-green-500 dark:text-green-400"} size={18} />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Office
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Come say hello at our office.
                </p>
                <p className="mt-2 text-sm text-green-500 dark:text-green-400">
                  34 Elizabeth Windsor Road, Marlborough
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-green-500 rounded-full bg-green-100/80 dark:bg-gray-800">
                <Phone className={"text-green-500 dark:text-green-400"} size={18} />
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className="mt-2 text-sm text-green-500 dark:text-green-400">
                  +263 8612 701 094
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=34%20Elizabeth%20Windsor%20Road,%20Marlborough+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
