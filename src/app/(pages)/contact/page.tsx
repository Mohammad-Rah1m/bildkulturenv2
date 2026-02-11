"use client"
import React from "react";
import { Phone, Mail, Globe} from "lucide-react"; 
import PageHeader from "@/components/layout/PageHeader";
import { useTranslations } from "next-intl";

const page = () => {
    const t = useTranslations('Contact');

  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        title={t("title")}
        description={t("description")}
      />
      <div className="grid grid-cols-3 gap-4">
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
        <h3 className="text-2xl">{t("colleagues")}</h3>
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
