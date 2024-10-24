import React from "react";

import "../styles/toast.css";

const Toast = (props) => {
  return (
    <div
      className="toast"
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        display: `${props.isOpen ? "block" : "none"}`,
      }}
    >
      <div
        className={`toast-body d-flex justify-content-between align-items-center ${
          props.toast.isError ? "error-msg m-0" : "success-msg m-0"
        }`}
      >
        <p className="toast-msg m-0">{props.toast.message}</p>
        <button
          type="button"
          className="toast-close-btn"
          data-dismiss="toast"
          aria-label="Close"
          onClick={props.closeHandle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
