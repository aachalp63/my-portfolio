import React from "react";
import { motion } from "framer-motion";

const timeline = [
  { year: "2024-2026", title: "SNDT Women's University", description: "Master of Computer Application(MCA)" },
  { year: "2022-2024", title: "IPSOS", description: "Executive - Data Processing" },
  { year: "2019-2022", title: "B.k. Birla College - University of Mumbai", description: "B.Sc. in Computer Science" },
  { year: "2019", title: "B.K. Birla College", description: "12th Science" },
  { year: "2017", title: "Sai English High School", description: "10th" },
];

const Timeline = ({ dark }) => (
  <section
    id="timeline"
    className={`min-h-screen px-6 py-20 relative overflow-hidden transition-colors ${
      dark
        ? "bg-gray-800"
        : "bg-gradient-to-br from-indigo-50 via-blue-50 to-yellow-50"
    }`}
  >
    {/* Background circles */}
    {dark ? (
      <>
        <div className="absolute top-16 right-10 w-36 h-36 rounded-full bg-pink-500/20 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-28 left-12 w-44 h-44 rounded-full bg-purple-500/20 filter blur-3xl animate-pulse"></div>
      </>
    ) : (
      <>
        <div className="absolute top-16 right-10 w-36 h-36 rounded-full bg-pink-200/30 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-28 left-12 w-44 h-44 rounded-full bg-indigo-200/30 filter blur-3xl animate-pulse"></div>
      </>
    )}

    <h2
      className={`text-3xl sm:text-4xl font-bold mb-12 text-center transition-colors ${
        dark
          ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-500 to-yellow-400"
          : "text-indigo-600"
      }`}
    >
      Timeline
    </h2>

    <div className="relative max-w-4xl mx-auto">
      {timeline.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="mb-10 relative flex items-start gap-6"
        >
          {/* Dot & line */}
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full shadow-[0_0_15px] transition-colors ${
                dark
                  ? "bg-cyan-400 shadow-cyan-400/50"
                  : "bg-indigo-400/60 shadow-indigo-400/30"
              }`}
            ></div>
            {index !== timeline.length - 1 && (
              <div
                className={`w-px flex-1 transition-colors ${
                  dark ? "bg-cyan-500/20" : "bg-indigo-300/40"
                }`}
              ></div>
            )}
          </div>

          {/* Card */}
          <div
            className={`rounded-xl p-6 shadow-lg flex-1 backdrop-blur-md border transition-colors ${
              dark
                ? "bg-gray-900/60 border-cyan-400/30"
                : "bg-white/90 border-indigo-200/50"
            }`}
          >
            <h3
              className={`text-lg font-semibold transition-colors ${
                dark ? "text-white" : "text-gray-800"
              }`}
            >
              {item.year} - {item.title}
            </h3>
            <p
              className={`mt-2 transition-colors ${
                dark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Timeline;
