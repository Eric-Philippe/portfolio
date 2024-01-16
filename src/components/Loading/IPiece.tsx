import { forwardRef, ForwardedRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

interface IPieceProps {
  className: string;
}

const IPiece = forwardRef<HTMLDivElement, IPieceProps>(
  (props: IPieceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={`iPiece ${props.className}`}>
        <div />
      </div>
    );
  }
);

export default motion(IPiece);
