import React from "react";
import DesignBannerLeft from "./DesignBannerLeft";
import { assets } from "../assets/assets";
import DesignBannerRight from "./DesignBannerRight";

const Design = () => {
  return (
    <div className="mx-10 sm:mx-[10%]">
      <DesignBannerLeft
        title="Bed-Room Is Place Where You Live Your Dreams."
        img_src={assets.i1}
      />
      <DesignBannerRight
        title="Nothing Feels Better Than Your Own Bed-Room."
        img_src={assets.i2}
      />
      <DesignBannerLeft
        title="Bed-Room Is Place Where You Live Your Dreams."
        img_src={assets.i3}
      />
       <DesignBannerRight
        title="Nothing Feels Better Than Your Own Bed-Room."
        img_src={assets.i4}
      />
    </div>
  );
};

export default Design;
