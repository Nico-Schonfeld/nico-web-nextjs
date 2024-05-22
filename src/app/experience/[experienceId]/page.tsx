import React from "react";

const ExperienceIdServer = ({
  params,
}: {
  params: { experienceId: number | string };
}) => {
  return <div>{params.experienceId}</div>;
};

export default ExperienceIdServer;
