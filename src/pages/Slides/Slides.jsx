import React from "react";
import Heading from "../../components/shared/Heading";
import { useLocation } from "react-router-dom";

import SlideList from "../../components/Slides/SlideList";
import AddSlide from "../../components/Slides/AddSlide";
import useSlides from "../../hooks/useSlides";

const Slides = () => {
  const location = useLocation();
  const { slides, refetch } = useSlides();
  console.log(slides);
  return (
    <div>
      <Heading title="Slides" path={`${location.pathname}`} />
      {/* main */}
      <div className="p-3 grid lg:grid-cols-6 gap-5">
        <SlideList slides={slides} refetch={refetch} />
        <div className="col-span-3">
          <AddSlide refetch={refetch}/>
        </div>
      </div>
    </div>
  );
};

export default Slides;
