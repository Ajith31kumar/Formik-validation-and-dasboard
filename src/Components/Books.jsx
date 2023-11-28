import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

const Books = ({ data, setData, edit }) => {
  const navigate = useNavigate();
  console.log("booksmodule", data);
  const formik = useFormik({
    initialValues: edit,

    validationSchema: Yup.object({
      title: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      author: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      isbn: Yup.string()
        .max(12, "Must be 12 characters or less")
        .required("Required"),
      date: Yup.date().nullable().required("Required"),
    }),
    onSubmit: (values) => {
      values["isbn"] = Number(values.isbn);
      console.log(values);
      navigate("/BooksPage");
      formik.resetForm();

      if (values.isEditing) {
        let a = [];
        for (let x of data) {
          if (x.isEditing) {
            a.push({ ...values, isEditing: false });
          } else {
            a.push(x);
          }
        }
        setData(a);
        console.log("updated value", data);
      } else {
        setData([...data, values]);
      }
    },
  });

  return (
    <Card>
      <Card.Body>
        <Card.Title><h1 className="text-center">Enter Book Details</h1></Card.Title>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Book Title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title ? (
              <Form.Text className="text-danger">
                {formik.errors.title}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Author"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.author}
            />
            {formik.errors.author ? (
              <Form.Text className="text-danger">
                {formik.errors.author}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group controlId="isbn">
            <Form.Label>ISBN Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the ISBN-Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.isbn}
            />
            {formik.errors.isbn ? (
              <Form.Text className="text-danger">
                {formik.errors.isbn}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group controlId="date">
            <Form.Label>Publication Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter the Date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
            />
            {formik.errors.date ? (
              <Form.Text className="text-danger">
                {formik.errors.date}
              </Form.Text>
            ) : null}
          </Form.Group>
          <div class="d-grid gap-2">
          <Button type="submit" variant="primary">
            Add the Book
          </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Books;
