import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Programs = () => {
  const { program } = config;

  return (
    <section className={`bg-background py-8`} id="programs">
      <div className={`container max-w-5xl mx-auto `}>
        <h1
          className={`w-full text-5xl font-bold leading-tight text-center text-primary`}
        >
          {program.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className="mt-10 p-5">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {program.courses.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    {/* <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    /> */}
                  </div>
                  <p className="ml-16 text-lg leading-6 text-secondary font-semibold">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Programs;
