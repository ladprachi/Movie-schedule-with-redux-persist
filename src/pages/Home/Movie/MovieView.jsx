/* eslint-disable react/prop-types */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Table } from "antd";
import moment from "moment";
// import moment from "moment";
import { Link } from "react-router-dom";

const MovieView = ({ addMovieState, handleDelete, handleEdit }) => {

  const TABLE_COLUMN = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imageUrl) => (
        <img
          src={imageUrl}
          style={{ width: "100px", height: "100px", borderRadius: "5px" }}
        />)
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <Link to={`/movie/view/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "director",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "Release-Date",
      dataIndex: "releaseDate",
      key: "releaseDate",
      render: (text, record) => {
        return moment(new Date(record.releaseDate)).format("DD/MM/YYYY hh:mm:ss")
      },
    },
    {
      title: "End-Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (text, record) => {
        return moment(new Date(record.endDate)).format("DD/MM/YYYY hh:mm:ss")
      }
    },
    {
      title: "Movie Type",
      dataIndex: "movieType",
      key: "movieType",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
          <span>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => {
                handleEdit(record?.id)
              }}
            />
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => handleDelete(record?.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="danger" icon={<DeleteOutlined />} />
            </Popconfirm>
          </span>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movies Data</h1>
      <Table columns={TABLE_COLUMN} dataSource={addMovieState} />
    </div>
  );
};

export default MovieView;
