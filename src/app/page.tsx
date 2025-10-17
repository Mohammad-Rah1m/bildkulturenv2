"use client"
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Map from "@/components/ui/Map";

const info = [
  {
    title: "Which Visual Culture?",
    excerpt: "",
    description:
      "Traditions of visual representation of nature in its specific forms were established long before “ecology” or other modern scientific disciplines existed.",
    icon: "/images/icons/visual-culture.svg",
  },
  {
    title: "Which Ecology?",
    excerpt: "",
    description:
      "“Ecology” is the name given to a sub-discipline of biology. However, ecological research is not conducted in this context alone –",
    icon: "/images/icons/ecology-icon.svg",
  },
  {
    title: "Which Medium?",
    excerpt: "",
    description:
      "The question of the medium being used also raises the issue of the relationship between technology and image, between the production and semantics of images.",
    icon: "/images/icons/medium-icon.svg",
  },
  // {
  //   title: "Which Network?",
  //   excerpt: "",
  //   description:
  //     "One essential component of the project was first to develop a web-based information system. The prototype is aimed in multiple ways at creating networks: ",
  //   icon: "/images/icons/network-icon.svg",
  // },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {info.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 rounded-md p-4 border border-border hover:shadow-lg"
          >
            <Image src={item.icon} alt="cultures icon" width={50} height={50} />
            <h2 className="text-xl">{item.title}</h2>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white hover:bg-accent/80 transition"
              aria-label="View Details"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
      <div>
        <Map/>
      </div>
    </div>
  );
}
