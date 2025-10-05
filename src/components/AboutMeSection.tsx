import profileImage from "@/assets/profile_square.png";
import Image from "next/image";

function AboutMeSection() {
  return (
    <section id="about" className="">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-fist lg:order-first w-full max-w-sm mx-auto lg:max-w-none lg:mx-0">
            <div className="relative aspect-square bg-green-50 z-10 rounded-lg shadow-xl overflow-hidden group">
              <Image
                src={profileImage}
                alt="Wasim Akram - Profile Picture"
                priority={true}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                className="transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-black/30"></div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="flex flex-col gap-6 lg:gap-6">
            <h2
              className="font-semibold uppercase tracking-wider mb-3
        text-amber-600 dark:text-amber-600 text-2xl "
            >
              <span className="text-gray-900 dark:text-white">About</span> Me
            </h2>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              I&apos;m{" "}
              <span className="text-amber-600 dark:text-amber-600">
                Wasim Akram
              </span>
            </h1>

            <div className="space-y-5 text-justify text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                a Junior{" "}
                <span className="font-medium text-amber-600 dark:text-amber-600">
                  MERN Stack Developer
                </span>{" "}
                from Dhaka, Bangladesh. My official documents list me as{" "}
                <span className="text-amber-600 dark:text-amber-600">
                  Md Jashim
                </span>
                , but I proudly use{" "}
                <span className="text-amber-600 dark:text-amber-600 italic">
                  Wasim Akram
                </span>{" "}
                in my professional identity.
              </p>
              <p>
                I love creating web applications with{" "}
                <span className="text-amber-600 dark:text-amber-600 font-medium">
                  MongoDB
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-amber-600 font-medium">
                  Express
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-amber-600 font-medium">
                  React
                </span>
                ,{" "}
                <span className="text-amber-600 dark:text-amber-600 font-medium">
                  Node.js
                </span>{" "}
                and{" "}
                <span className="text-amber-600 dark:text-amber-600 font-medium">
                  TypeScript
                </span>
                , focusing on clean code and practical solutions. I enjoy
                solving problems with code, contributing to open-source, and
                continuously learning to improve my craft.
              </p>
              <p>
                My long-term goal is to grow as a{" "}
                <span className="text-amber-600 dark:text-amber-600">
                  full-stack developer
                </span>{" "}
                and contribute to impactful projects that make technology more
                accessible and meaningful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
