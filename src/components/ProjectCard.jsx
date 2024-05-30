import { useState } from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

function ProjectCard({
  image,
  name,
  description,
  icons,
  linkGithub,
  linkHosting,
}) {
  const [isTruncated, setIsTruncated] = useState(true);

  const handleMouseOver = () => {
    setIsTruncated(false);
  };

  const handleMouseLeave = () => {
    setIsTruncated(true);
  };

  return (
    <Card
      className="bg-light my-3 projectCard"
      onClick={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Row className="p-2">
        <Col md={5}>
          <a target="blank" href={linkHosting}>
            <Card.Img
              src={"../images/" + image}
              alt={name}
              /*   style={{ height: "10rem" }} */
              className="projectCard__img"
            />
          </a>
        </Col>
        <Col md={7}>
          <Card.Body className="px-0 ">
            <div>
              <Card.Title>{name}</Card.Title>
              <Card.Text
                className={`projectCard__description ${
                  isTruncated ? "text-truncate" : ""
                }`}
              >
                {description}
              </Card.Text>
            </div>

            <Badge pill bg="dark" className="mt-4">
              {icons.map((icon, index) => (
                <span className="text-warning" key={index}>
                  {icon}
                </span>
              ))}
            </Badge>

            <a target="blank" href={linkGithub}>
              <Badge
                bg="dark"
                className="position-absolute bottom-0 start-100 translate-middle"
              >
                <AiFillGithub className="projectCard__gitIcon" />
              </Badge>
            </a>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ProjectCard;
