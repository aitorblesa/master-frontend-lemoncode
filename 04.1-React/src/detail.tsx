import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <h2>Página de detalle</h2>
      <h3>User Id: {id}</h3>
      <Link to="/">Vuelve a la lista</Link>
    </>
  );
};
