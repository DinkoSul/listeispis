import React, { useState } from "react";

const Ispisnovi = ({ imena }) => {
  const [names, setNames] = useState(imena);
  return (
    <div>
      <ul>
        {names.map(() => (
          <li>{}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ispisnovi;
