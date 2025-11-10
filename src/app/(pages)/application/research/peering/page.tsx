import React from "react";
import PageHeader from "@/components/layout/PageHeader";

const page = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Peering into the Depths: Scientific Images of a Lake"
        description=""
      />
      <div className="border border-border p-4 space-y-6 rounded-md">
        <div>
          <h5>Theme</h5>
          <p>Visualisation, constitution of objects, field sciences</p>
        </div>
        <div>
          <h5>Media</h5>
          <p>Diagrams, tables, texts</p>
        </div>
        <div>
          <h5>Period</h5>
          <p>approx. 1870 - 1925</p>
        </div>
        <div>
          <h5>Discipline</h5>
          <p>Philosophy of Science, History of Science</p>
        </div>
        <div>
          <h5>Object</h5>
          <p>Ecological research, lakes, limnology</p>
        </div>
        <div>
          <h5>Summary of:</h5>
          <p>
            Schwarz, A.E. (2003). Die Ökologie des Sees. Diagramme als
            Theoriebilder. (The Ecology of the Lake. Diagrams as Theory Makers.)
            In: Bildwelten des Wissens. Kunsthistorisches Jahrbuch für
            Bildkritik, 1, pp. 64-74.
          </p>
        </div>
      </div>
      <div>
        <p>
          Limnology, the ecology of inland waters, begins with the
          transformation from “the lake of ordinary experience” to the
          scientific object “ecological lake”. In the course of this process,
          the lake is appropriated not solely through observation but through
          action on the object. Work is done on the lake: measurements are
          taken, numerical values literally brought forth. The figures are
          arranged in tables, algorithms are applied, data are transferred to
          diagrams: the lake becomes a controllable and manipulable object. This
          study looked at the period from 1869 to 1922. In 1869 nature
          researcher François-Alphonse Forel published an article in which the
          lake was described for the first time as an environment for organisms
          and thus as a whole, as a “system”. With the founding of the
          International Society of Limnology in 1922, the scientific
          disciplining of the lake was brought to completion. Whereas graphic
          representations were of no significance at all at the beginning of
          this scientific appropriation, they became more and more important as
          the lake progressed towards becoming established epistemically –
          ultimately more or less constituting the very identity of the
          discipline. At least this is true of quite particular diagrams: the
          key point about the graph is that depth is displayed from top to
          bottom, so that parameters such as temperature and the frequency of
          plankton are shown running from the surface of the water down to the
          lake bottom. While this goes against the usual reading direction,
          scientific activity follows this directionality into the lake’s
          depths. To a certain extent this type of diagram represents the lake
          topographically, reproducing activity at the lake bottom and opening
          up the lake’s depths via this visual representation. The so-called
          depth ordinate forms the basis for the discipline of limnology. The
          research object itself is also afforded stabilisation by means of
          visual representation in a diagram: the lake becomes a normalised
          expanse of water (also in the geometric sense of a bounded space)
          through the graphic image. The continuity apparent in this graphic
          space generates a homogeneity that is created through the linear
          linking of measurements; this homogeneity is what makes continuity in
          the lake conceivable at all. And this idea in turn is what makes it
          possible to “find one’s way” in the lake (a practical means of
          orientation), thus contributing ultimately to the stabilisation of
          “ecological lake” as an object of research. A further aspect of this
          work that is interesting in both media and science studies terms is
          the debate about the representation of organisms found in the lake,
          which undergo a transformation from text to table to diagram. In the
          first limnological treatises, the number of organisms found was first
          given in number words as part of the running text; then, in the next
          stage, the number words were listed in a table, so that it was still
          not possible to undertake any calculations. In the stage after that,
          actual numbers were given which were eventually presented in columns
          and further condensed by applying particular algorithms. Later still a
          steadily growing number of parameters were added to the tables,
          represented using figures. The tables became increasingly complex and
          thus difficult to read. The move toward graphics facilitated a “new
          clarity”. Graphics offer a bird’s eye view of the data contained in a
          table: the data can be taken in at a glance; they form a whole, they
          create an image. To the trained eye, then, graphics are easier to
          read: phenomena that were merely readable in the table but not
          apparent are now made visible.
        </p>
      </div>
    </div>
  );
};

export default page;
