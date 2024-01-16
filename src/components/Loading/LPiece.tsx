import { forwardRef, ForwardedRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

interface LPieceProps {
  className: string;
}

const LPiece = forwardRef<HTMLDivElement, LPieceProps>(
  (props: LPieceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={`lPiece ${props.className}`}>
        <div />
        <div />
      </div>
    );
  }
);

export default motion(LPiece);
