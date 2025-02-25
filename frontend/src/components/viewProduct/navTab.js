"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ReviewTab from "./reviewTab";
import DiscriptionTab from "./discriptionTab";

const NavTab = () => {
  return (
    <>
      <div className="mt-5">
        <Tabs defaultActiveKey="reviews" id="product-nav-tab" className="mb-3">
          <Tab eventKey="reviews" title="Reviews (202)">
            <ReviewTab />
          </Tab>
          <Tab eventKey="discription" title="Discription">
            <DiscriptionTab />
          </Tab>
          <Tab eventKey="discussion" title="Discussion">
            Tab content for Discussion
          </Tab>
          <Tab eventKey="giftcard" title="Gift Card">
            Tab content for Gift Card
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default NavTab;
