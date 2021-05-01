import { useState } from 'react';

const useHover = () => {
  const [hovered, setHovered] = useState();

  // const mouseOver = useCallback((event) => {
  //   const { target } = event;
  //   const key = target.getAttribute('data-key');
  //   setHovered((curState) => ({ ...curState, [key]: true }));
  // }, []);

  // const mouseOut = useCallback((event) => {
  //   const { target } = event;
  //   const key = target.getAttribute('data-key');
  //   setHovered((curState) => ({ ...curState, [key]: false }));
  // }, []);

  const onFocus = () => {
  };

  const onBlur = () => {
  };
  const onMouseEnter = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  return {
    hovered, onMouseEnter, onMouseLeave, onBlur, onFocus,
  };
};

export default useHover;
