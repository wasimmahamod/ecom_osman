import React from "react";

const ImageSlider = () => {
  return (
    <>
      <div>
        <div style={{ height: "416px" }} className="bg-gray rounded-2"></div>
        <div className="d-flex gap-3 justify-content-center mt-4">
          <div
            style={{ width: "128px", height: "128px" }}
            className="bg-gray rounded-2"
          ></div>
          <div
            style={{ width: "128px", height: "128px" }}
            className="bg-gray rounded-2"
          ></div>
          <div
            style={{ width: "128px", height: "128px" }}
            className="bg-gray rounded-2"
          ></div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
