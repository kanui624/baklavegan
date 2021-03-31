// React
import { useEffect, useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setDimensions } from "@/redux/slices/WindowSizeSlice";

export const useWindowResize = () => {
  const [size, setSize] = useState([0, 0]);
  const dispatch = useDispatch();

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
      dispatch(
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
