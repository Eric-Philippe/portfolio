import { forwardRef, ForwardedRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

interface SPieceProps {
  className: string;
}

const SPiece = forwardRef<HTMLDivElement, SPieceProps>(
  (props: SPieceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={`sPiece ${props.className}`}>
        <div />
        <div />
      </div>
    );
  }
);

export default motion(SPiece);
