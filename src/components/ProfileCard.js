import React from "react";
import { Card } from "react-bootstrap";

function ProfileCard() {
return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <Card
            className="text-center bg-dark text-light p-4 shadow-lg border border-secondary rounded-4"
            style={{ width: "22rem" }}
        >
            <div className="d-flex justify-content-center mt-3">
                <img
                    src="gengar.jpeg"
                    alt="Profile"
                    style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        border: "3px solid #0d6efd",
                        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
                    }}
                />
            </div>
            <Card.Body>
                <Card.Title className="fw-bold fs-4 mt-3">Pantha Protick</Card.Title>
                <Card.Text>
                    pantha.cse.20230104010@aust.edu
                </Card.Text>
                <hr className="border-secondary" />
                <Card.Text>
                    <strong>📅 Joined on:</strong> 03/03/2025
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);
}

export default ProfileCard;
