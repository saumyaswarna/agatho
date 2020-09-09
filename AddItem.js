import React from "react";
import PropTypes from "prop-types";

export const AddItem = ({ name, tweet, onChange, onSubmit }) => (
  <div className="row justify-content-center">
    <form className="form-inline" onSubmit={onSubmit}>
      <input
        type="textarea"
        className="form-control mb-2 mr-sm-2"
        placeholder="name"
        value={name}
        name="name"
        onChange={onChange}
      />
      <div className="input-group mb-2 mr-sm-2"></div>
      <input
        type="text"
        className="form-control"
        placeholder="What's happening?"
        value={tweet}
        name="tweet"
        onChange={onChange}
      />

      <button type="submit">Tweet</button>
    </form>
  </div>
);

AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
