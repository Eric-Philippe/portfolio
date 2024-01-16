import { forwardRef, ForwardedRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

interface TPieceProps {
  className: string;
}

const TPiece = forwardRef<HTMLDivElement, TPieceProps>(
  (props: TPieceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={`tPiece ${props.className}`}>
        <div />
        <div />
      </div>
    );
  }
);

export default motion(TPiece);
