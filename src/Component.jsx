import React, { useRef } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "./constants";
import ReactHtmlParser from "react-html-parser";

const style = {
  border: "1px solid rgb(207, 207, 207)",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
};
const Component = ({ data, components, path }) => {
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const component = components[data.id];

  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="component draggable"
    >
      {/* <div>{data.id}</div> */}
      <div>{ReactHtmlParser(component.content)}</div>
    </div>
  );
};
export default Component;
