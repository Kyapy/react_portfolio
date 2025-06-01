import { Col } from "react-bootstrap";

export const Project_items = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
            position: "relative",
            zIndex: 10,
          }}
        >
          <img src={imgUrl} alt={title} style={{ width: "100%" }} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="btn-wrapper">
              <button className="view-btn">View Project</button>
            </div>
          </div>
        </a>
      </div>
    </Col>
  )
}