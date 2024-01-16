import { forwardRef, ForwardedRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

interface ZPieceProps {
  className: string;
}

const ZPiece = forwardRef<HTMLDivElement, ZPieceProps>(
  (props: ZPieceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={`zPiece ${props.className}`}>
        <div />
        <div />
      </div>
    );
  }
);

export default motion(ZPiece);
