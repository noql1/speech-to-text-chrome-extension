import { useState } from 'react';

export default function Clrchange() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick}
      >
        Hello world
      </div>
    </div>
  );
}
