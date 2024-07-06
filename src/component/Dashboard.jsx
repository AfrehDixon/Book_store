import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
  Menu,
  Dropdown,
} from "antd";
import axios from "axios";

const { TextArea } = Input;

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [form] = Form.useForm();

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get("YOUR_API_ENDPOINT/books"); // Replace with your API endpoint
//       setBooks(response.data);
//     } catch (error) {
//       message.error("Failed to fetch books");
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const handleAddEdit = async (values) => {
//     try {
//       if (editingBook) {
//         // Edit book
//         await axios.put(`YOUR_API_ENDPOINT/books/${editingBook.id}`, values); // Replace with your API endpoint
//         message.success("Book updated successfully");
//       } else {
//         // Add book
//         await axios.post("YOUR_API_ENDPOINT/books", values); // Replace with your API endpoint
//         message.success("Book added successfully");
//       }
//       fetchBooks();
//       setIsModalOpen(false);
//       setEditingBook(null);
//       form.resetFields();
//     } catch (error) {
//       message.error("Failed to save book");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`YOUR_API_ENDPOINT/books/${id}`); // Replace with your API endpoint
//       message.success("Book deleted successfully");
//       fetchBooks();
//     } catch (error) {
//       message.error("Failed to delete book");
//     }
//   };

  const handleMenuClick = (e, record) => {
    if (e.key === "edit") {
      handleModalOpen(record);
    } else if (e.key === "delete") {
    //   handleDelete(record.id);
    }
  };

  const Menu = (record) => (
    <Menu onClick={(e) => handleMenuClick(e, record)}>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="delete">Delete</Menu.Item>
    </Menu>
  );

  const handleModalOpen = (book = null) => {
    setEditingBook(book);
    setIsModalOpen(true);
    form.setFieldsValue(
      book || {
        name: "",
        category: "",
        price: 0,
        description: "",
      }
    );
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
    //   render: (text, record) => (
        <Dropdown  trigger={["click"]}>
          <Button>Actions</Button>
        </Dropdown>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={() => handleModalOpen()}>
        Add Book
      </Button>
      <Table columns={columns} dataSource={books} rowKey="id" />
      <Modal
        title={editingBook ? "Edit Book" : "Add Book"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setEditingBook(null);
          form.resetFields();
        }}
        footer={null}
      >
        {/* <Form form={form} onFinish={handleAddEdit} layout="vertical"> */}
        <Form form={form}  layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the book name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please enter the category" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please enter the price" }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingBook ? "Update" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Dashboard;
