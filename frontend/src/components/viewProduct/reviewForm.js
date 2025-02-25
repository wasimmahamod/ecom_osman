import React, { useState } from "react";
import ReviewStar from "review-star";
import { Col, Row, Button, Form, InputGroup } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";

const ReviewForm = () => {
  const [reVal, SetReVal] = useState(0);
  const { Formik } = formik;
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    reviewtxt: yup.string().required(),
  });
  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          name: "",
          email: "",
          reviewtxt: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="10"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  row="2"
                  placeholder="Your Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="10"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@mail.com"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="10"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Review Details"
                  name="reviewtxt"
                  value={values.reviewtxt}
                  onChange={handleChange}
                  isInvalid={!!errors.reviewtxt}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.reviewtxt}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="d-flex gap-2 mb-3">
              <p className="m-0 line-height-30">Rating</p>
              <ReviewStar reviewClick={reVal} reviewCount={SetReVal} />
            </div>
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ReviewForm;
