import React from "react";
import Container from "@/components/container";
import "./style.css";
import { categoryData } from "@/data/homeData";

const Category = async () => {

  return (
    <>
      <Container>
        <div className="category_item">
         <h4>Category</h4>
        <div className="category">
          {categoryData.map((category, index) => (
            <div key={index} className="item">
              <category.icon />
              <span>{category.name}</span>
            </div>
          ))}
        </div>
        </div>
      </Container>
    </>
  );
};

export default Category;
