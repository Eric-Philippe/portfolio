import { forwardRef, ForwardedRef } from "react";
import { motion } from "framer-motion";

import "./styles.css";

interface JPieceProps {
  className: string;
}

const JPiece = forwardRef<HTMLDivElement, JPieceProps>(
  (props: JPieceProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={`jPiece ${props.className}`}>
        <div />
        <div />
      </div>
    );
  }
);

export default motion(JPiece);
