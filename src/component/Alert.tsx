import { ReactNode } from "react";

interface prop {
  children: ReactNode,
  onClick: () => void,
}
const Alert = ({ children, onClick }: prop) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        onClick={onClick}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
