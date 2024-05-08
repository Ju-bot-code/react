import {ReactNode} from 'react'

 interface prop {
  children: ReactNode;
  btntype?: string;
  onclick: () => void;
}
function Button({ children,btntype='primary', onclick }: prop) {
  return (
    <>
    <button
      onClick={onclick}
      className={'btn btn-'+btntype}
    >
      {children}
    </button>
    </>
  );
}

export default Button;
