import React from "react";
import { Phone, Mail, Globe} from "lucide-react"; 

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-1/2">
        <h2 className="text-3xl">Collaborations</h2>
        <p>
          Your cooperation is needed! The project team would appreciate it if
          you could contribute information about the images listed below.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* <div className="rounded-md p-4 border border-border hover:shadow-lg flex flex-col gap-2">
          <h3 className="text-xl">Prof. Dr. Angela Krewani</h3>
          <p className="text-sm">
            Philipps-University Marburg
          </p>
          <div className="flex items-center gap-3">
            <Phone className="text-accent" />
            <p>+49(0)6421 28-24691</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-accent" />
            <p>krewani@staff.uni-marburg.de</p>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="text-accent" />
            <p>Website</p>
          </div>
        </div> */}
        <div className="rounded-md p-4 border border-border hover:shadow-lg flex flex-col gap-2">
          <h3 className="text-xl">Prof. Dr. Astrid Schwarz</h3>
          <p className="text-sm">
            FG Allgemeine Technikwissenschaft BTU Cottbus - Senftenberg D-03046 Cottbus
          </p>
          <div className="flex items-center gap-3">
            <Phone className="text-accent" />
            <p>+49 (0)355 69-3162</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-accent" />
            <p>schwarza@b-tu.de</p>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="text-accent" />
            <p>Website</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl">Colleagues</h3>
        <p className="text-xl">Lund University</p>
        <p>- Prof. Victoria Höög (Department of Arts and Cultural Studies and Department of Philosophy)</p>
        <p>- Prof. Christer Brönmark (Department of Biology)</p>
      </div>

      <div>
        {/* <h3 className="text-2xl">Colleagues</h3> */}
        <p className="text-xl">Prof. Dr. Angela Krewani</p>
        <p>- Philipps-University Marburg</p>
        <p>- krewani@staff.uni-marburg.de</p>
      </div>

      <div>
        {/* <h3 className="text-2xl">Colleagues</h3> */}
        <p className="text-xl">BTU C-S</p>
        <p>- Study project and Master thesis (Martin Decker, Marilene Langemann)</p>
        <p>- Visual data and structure of the data base (Alex Tam, Paul Kölle, Katarzyna Weronika Polewska, Hassan Raza)</p>
      </div>
    </div>
  );
};

export default page;
