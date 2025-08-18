import React from "react";
import { Card } from "react-bootstrap";

function ProfileCard() {
return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <Card
            className="text-center bg-white text-dark p-4 shadow-sm rounded-4"
            style={{ width: "22rem" }}
        >
            <div className="d-flex justify-content-center mt-3">
                <img
                    src="gengar.jpeg"
                    alt="Profile"
                    className="rounded-circle shadow-sm"
                    style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                        border: "3px solid #0d6efd"
                    }}
                />
            </div>
            <Card.Body>
                <Card.Title className="fw-bold fs-4 mt-3">Pantha Protick</Card.Title>
                <Card.Text className="text-muted">
                    pantha.cse.20230104010@aust.edu
                </Card.Text>
                <hr />
                <Card.Text>
                    <strong>📅 Joined on:</strong> 03/03/2025
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);
}

export default ProfileCard;
