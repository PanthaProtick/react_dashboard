import React from "react";
import { Table, Badge, Pagination } from "react-bootstrap";

const articles = [
  {
    title: "The Art of Storytelling: A Guide to Captivating Your Audience",
    status: "Published",
    edited: "2 days ago",
  },
  {
    title: "Crafting Compelling Characters: A Step-by-Step Approach",
    status: "Draft",
    edited: "1 week ago",
  },
  {
    title:
      "Mastering Dialogue in Fiction: Techniques for Realistic Conversations",
    status: "Published",
    edited: "2 weeks ago",
  },
];

function ArticleTable() {
  return (
    <div className="bg-dark p-4 rounded shadow-lg">
      <h4 className="mb-4 fw-bold">📄 My Articles</h4>
      <Table hover variant="dark" className="align-middle rounded">
        <thead className="table-secondary text-dark">
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
