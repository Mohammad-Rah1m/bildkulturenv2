"use client";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import Map from "@/components/ui/Map";
import { useState } from "react";

const info = [
  {
    title: "Which Visual Culture?",
    excerpt: "",
    description:
      "Traditions of visual representation of nature in its specific forms were established long before “ecology” or other modern scientific disciplines existed.",
    icon: "/images/icons/visual-culture.svg",
    fullDescription:
      "Traditions of visual representation of nature in its specific forms were established long before “ecology” or other modern scientific disciplines existed. Landscape painting was of decisive importance here; since the 17th century it has gone through various stylistic eras. Each of these eras is characterised by the specific perspective adopted by the artists concerned and by a collective societal perspective on the landscape. A visual culture is characterised as much by the materiality of the image and its iconic perception in the process of production and reception as it is by its social setting. In this sense, for example, it is possible to identify distinct artistic, scientific, technical and media visual cultures in which different aesthetic and epistemic criteria apply. It is not just in the current age of image-based digital methods that images have begun to acquire significance for the process of knowledge production and the stabilisation of facts in ecological research. Visual representations have accompanied ecological research in its cognitive activities and methods of representation from the very beginning. Elements of traditional landscape painting can be found here, as can scientific sketches, a variety of photographic techniques such as aerial photography or microphotography, as well as various procedures for representing data in diagrams. One aim of this project is to describe these procedures and practices as visual cultures in their temporally and spatially limited scientific, technical and social environment. Examples of this might be, say, recent debates in relation to seeking and establishing models for the remediation of former mining landscapes, an analysis of the epistemic role of images in the invention and adoption of the phenomenon of “dying forests”, or the historical reconstruction of visual icons of our blue planet, Biosphere 1, which not only cut across the most varied of discourses but also left behind visible material traces: Biosphere 2 in the Arizona desert and Biosphere 3 in Siberia.",
  },
  {
    title: "Which Ecology?",
    excerpt: "",
    description:
      "“Ecology” is the name given to a sub-discipline of biology. However, ecological research is not conducted in this context alone –",
    icon: "/images/icons/ecology-icon.svg",
    fullDescription:
      "“Ecology” is the name given to a sub-discipline of biology. However, ecological research is not conducted in this context alone – it is also a component of engineering-based disciplines, such as agriculture and forestry, and of subjects based more in the humanities and social sciences, such as cultural or human ecology. Indeed “ecological” has come to be a comprehensive catchword – especially a political one – that structures discourses and provides orientation for action. It follows that “ecological” can be conceived in both normative and epistemological terms. In this project we are particularly interested in images of nature in its specific forms, that is, the modes of representation of nature “out there” in open space, outside the laboratory. These images are influenced substantially by visualisations of nature that are generated in the context of ecological research. All that is seen, described, assessed and politically negotiated as “ecological” in society is mediated through the production and transformation of images – through images which wander nomadically between various media and discourses as they move from science into society. As a consequence, nature in its specific forms – visible to the naked eye – is in this sense just as much a constructed phenomenon as the abstract nature of the laboratory sciences. A range of different visual images of nature are constantly being generated and defended, depending on the historical, cultural and methodological context in which they occur. These images represent different metaphysical ideas and epistemic models, and they differ in terms of the techniques, strategies and settings involved in their production. Ecological research, as we see it, can be read as a mapping programme that presents different ideas of nature as they occur in different scientific, national, philosophical and geographical cultures. Whether a particular piece of nature is considered worthy of protection, is regarded as a commodifiable resource, as unreliable and dangerous, or as accessible to the contemplative mind depends crucially on its cultural environment – and thus, in our knowledge society, on science’s visual and conceptual representations.",
  },
  {
    title: "Which Medium?",
    excerpt: "",
    description:
      "The question of the medium being used also raises the issue of the relationship between technology and image, between the production and semantics of images.",
    icon: "/images/icons/medium-icon.svg",
    fullDescription:
      "The question of the medium being used also raises the issue of the relationship between technology and image, between the production and semantics of images. Historically, nearly every field of scientific research has developed a specific visualisation practice based on the contemporary media technologies available to it. A great many phototechnical procedures were developed as a consequence of this. Landscape photography, for example, with its numerous references to landscape painting, has played an important role in both ecology itself and in its conceptual development. Since the beginning of the 20th century quantitative techniques have increasingly been developed and used for mapping and surveying landscapes. This includes “photogrammetry”, the precursor to satellite-based remote sensing systems. Currently, photography is being joined by digital imaging; the latter has either replaced photography entirely or has generated in conjunction with it a variety of hybridisations. Media using technical equipment as well as electronic media play a key role in the visualisation of the specific forms of nature. They are not “neutral” mediators of external nature; rather, they are substantially involved in the construction of images. Technical apparatuses along with their visual capabilities write themselves directly into the process of image formation. What is decisive, though, is whether the visualisation occurs in the medium of painting, photography or digital imaging. All technical apparatuses are based on various technologies, which inscribe themselves onto and into the image and bring forth different representations of, say, landscape accordingly.",
  },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<null | (typeof info)[0]>(
    null
  );

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
              onClick={() => setSelectedItem(item)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white hover:bg-accent/80 transition self-end"
              aria-label="View Details"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
      <div>
        <Map />
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 ">
          <div className="bg-white dark:bg-neutral-900 rounded-lg max-w-md w-full p-6 relative shadow-xl animate-fadeIn h-72 overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            {/* Icon + Title */}
            <div className="flex flex-col items-center text-center gap-3">
              <Image
                src={selectedItem.icon}
                alt={`${selectedItem.title} icon`}
                width={60}
                height={60}
              />
              <h2 className="text-2xl font-semibold text-black">{selectedItem.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                {selectedItem.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
