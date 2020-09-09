import React from "react";
import PropTypes from "prop-types";

export const ItemCard = ({
  toggleEditing,
  item,
  image,
  onChange,
  index,
  onDelete,
}) => (
  <div className="col-md-6 col-lg-3">
    <div className="card mb-3">
      <img className="card-img-top" src={image} />
      <div className="card-body">
        {item.isEditing ? (
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="form-control mb-2 mr-sm-2"
              placeholder="name"
              value={item.name}
              onChange={(event) => onChange(event, index)}
              required
            />
            <input
              type="text"
              name="tweet"
              className="form-control"
              placeholder="TWEET"
              value={item.tweet}
              onChange={(event) => onChange(event, index)}
              required
            />
          </div>
        ) : (
          <div>
            <h4 style={{ marginTop: "-20px", color: "white" }}>{item.name}</h4>
            <div className="row justify-content-center mb-4">
              <p className="card-text">
                <span></span>
                <span style={{ marginTop: "10px", color: "white" }}>
                  {item.tweet}
                </span>
              </p>
            </div>
          </div>
        )}

        <div className="row justify-content-center">
          <div>
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={toggleEditing}
            >
              {item.isEditing ? "Save" : "Edit"}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tweet: PropTypes.string.isRequired,
  }),
  toggleEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
