import React from "react";
import IdeaButton from "../selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton";

const ProductPage = () => {
  return (
    <div className="flex justify-center align-middle h-screen">
      <div className="flex justify-center align-middle h-screen flex">
        <IdeaButton type="svg1" textspin="spinnersvg1" />
        <div>Tableau</div>
      </div>
    </div>
  );
};

export default ProductPage;
