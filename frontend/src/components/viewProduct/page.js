import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";
import { PiLineVerticalBold } from "react-icons/pi";
import { MdFavorite } from "react-icons/md";
import ReviewStar from "../reviewStar/page";
import FastDeliverySVG from "../../../public/svg/FastDeliverySVG";
import VoucherSVG from "../../../public/svg/VoucherSVG";
import PackageSVG from "../../../public/svg/PackageSVG";
import NavTab from "./navTab";
import ImageSlider from "./imgSlider";

const ViewProduct = () => {
  return (
    <>
      <div className="my-5">
        <Row className="gap-5">
          <Col className="">
            <ImageSlider />
          </Col>
          <Col className="">
            <Row>
              <Col>
                <div className="d-flex align-items-center gap-2 text-gray text-regular-18">
                  Product <FaChevronRight />
                  <span className="text-red">Wareless Microphone</span>
                </div>
                <div className="d-flex justify-content-between align-items-center my-3">
                  <div className="d-flex gap-2 text-gray mt-3 text-regular-18">
                    <span className="text-black text-medium-18 line-height-30">
                      5.0
                    </span>
                    <ReviewStar count={5} />
                    <span>{`Review (12)`}</span>
                    <PiLineVerticalBold />
                    <span>sold 99</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center text-medium-18">
                    <MdFavorite className="text-red" />
                    Add to Wishlist
                  </div>
                </div>
                <div className="my-3">
                  <h2 className="text-medium-36">Wireless Microphone</h2>
                </div>
                <div className="d-flex align-items-center gap-2 my-3">
                  <span className="text-bold-36">$20.00</span>
                  <del className="text-gray">$30.00</del>
                  <span className="px-1 py-2 rounded-2 text-red border-red">
                    save 50%
                  </span>
                </div>
                <div className="d-flex align-items-center gap-4 text-regular-18 my-3">
                  <div className="d-flex align-items-center gap-2">
                    <FastDeliverySVG />
                    <span>Free Delivery</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <VoucherSVG />
                    <span>Avaialble Voucher</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <PackageSVG />
                    <span>In Stock</span>
                  </div>
                </div>
                <hr />
                <div className="my-3">
                  <p className="text-medium-18 mt-3 mb-2">Discription</p>
                  <p className="text-gray">
                    Wireless Microphone with the new style, shockproof, clear
                    voice reception that suitable for recording, online meeting,
                    vlogging, and calling. Free casing with high-quality zipper.
                  </p>
                </div>
                <div className="mt-5 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-gray">Quantity</span>
                    <span className="btn btn-secondary">
                      <FaMinus />
                    </span>
                    <span className="p-2">1</span>
                    <span className="btn btn-primary">
                      <FaPlus />
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="theme-btn-primary-outline">Chart</span>
                    <span className="theme-btn-primary">Add to Cart</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <NavTab />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ViewProduct;
