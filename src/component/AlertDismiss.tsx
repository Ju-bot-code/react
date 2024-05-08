import { ReactNode, useState } from "react";
import Button from "./button";
import Alert from "./Alert";

interface prop {
  children: ReactNode;
}

export const AlertDismiss = ({ children }: prop) => {
  let [show, setShow] = useState(false);
  return (
    <>
      <br />

      {show && <Alert onClick={() => setShow(false)}>{children}</Alert>}
      <Button onclick={() => setShow(true)} btntype="primary">
        click
      </Button>
    </>
  );
};
