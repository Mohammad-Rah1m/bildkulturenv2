import React from "react";
type PageHeaderProps = {
    title: string;
    description: string;
};
const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div>
      <h2 className="text-3xl">{title}</h2>
      <p>
        {description}
      </p>
    </div>
  );
};

export default PageHeader;
