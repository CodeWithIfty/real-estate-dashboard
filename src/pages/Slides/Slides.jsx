import React from "react";
import Heading from "../../components/shared/Heading";
import { useLocation } from "react-router-dom";

import SlideList from "../../components/Slides/SlideList";
import AddSlide from "../../components/Slides/AddSlide";

const Slides = () => {
  const location = useLocation();
  return (
    <div>
      <Heading title="Slides" path={`${location.pathname}`} />
      {/* main */}
      <div className="p-3 grid lg:grid-cols-6 gap-5">
        <SlideList />
        <div className="col-span-3">
          <AddSlide />
        </div>
      </div>
    </div>
  );
};

export default Slides;
