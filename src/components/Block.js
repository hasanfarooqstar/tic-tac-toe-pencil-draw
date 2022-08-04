import React from "react";

function Block({ mark, position, onClick }) {
  // console.log(mark);
  //   console.log(position);
  return (
    <>
      <div
        className="block"
        onClick={() => {
          onClick(position);
        }}
      >
        {mark && mark()}
      </div>
    </>
  );
}

export default Block;
