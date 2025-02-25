import React from "react";
import { Col, Row } from "react-bootstrap";
import ReviewStar from "../reviewStar/page";
import ReviewForm from "./reviewForm";

const ReviewTab = () => {
  return (
    <>
      <Row className="gap-5 mt-4">
        <Col>
          <div className="mb-3">
            <div className="d-flex gap-2">
              <div className="box-56 rounded-1 bg-gray">img</div>
              <div>
                <p className="m-0 text-medium-18 text-black">Name</p>
                <div className="d-flex gap-2 mt-1">
                  <span className="text-red line-height-30"> 5.0</span>
                  <span>
                    <ReviewStar count={5} />
                  </span>
                  <span className="text-gray line-height-30">1 Month Ago</span>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div className="">
            <h6 className="text-bold-24">Add Your Review</h6>
            <p className="text-gray w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <div>
              <ReviewForm />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ReviewTab;
