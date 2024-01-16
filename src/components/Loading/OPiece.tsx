import { forwardRef, ForwardedRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

interface OPieceProps {
  className: string;
}

const OPiece = forwardRef<HTMLDivElement, OPieceProps>(
  (props: OPieceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={`oPiece ${props.className}`}>
        <div />
      </div>
    );
  }
);

export default motion(OPiece);
