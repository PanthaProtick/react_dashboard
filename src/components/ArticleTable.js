import React from "react";
import { Table, Badge, Pagination } from "react-bootstrap";

const articles = [
  {
    title: "Unlocking Creativity: Writing Beyond the Ordinary",
    status: "Published",
    edited: "3 days ago",
  },
  {
    title: "Designing Strong Protagonists: A Beginner’s Guide",
    status: "Draft",
    edited: "1 week ago",
  },
  {
    title: "Balancing Plot and Emotion in Modern Storytelling",
    status: "Published",
    edited: "2 weeks ago",
  },
  {
    title: "The Power of Visual Imagination in Writing",
    status: "Draft",
    edited: "1 month ago",
  },
];

function ArticleTable() {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h4 className="mb-4 fw-bold text-dark">📄 My Articles</h4>
      <Table hover responsive className="align-middle">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((a, i) => (
            <tr key={i}>
              <td className="fw-semibold">{a.title}</td>
              <td>
                <Badge
                  bg={a.status === "Published" ? "success" : "warning"}
                  pill
                >
                  {a.status}
                </Badge>
              </td>
              <td className="text-muted">{a.edited}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination className="justify-content-center mt-3">
        <Pagination.Prev />
        <Pagination.Item active>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </div>
  );
}

export default ArticleTable;
