// React
import { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setDimensions } from '../../redux/slices/WindowSizeSlice';

// React Types
import { FC } from 'react';

// Redux Types
import { AppState } from '../../redux/store';

const ClientOnly: FC = ({ children }: any) => {
  const {
    WindowSize: { width, height },
  } = useSelector<AppState, AppState>((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );
  }, []);

  if (width === 0 || height === 0) {
    return null;
  }
  return children;
};

export default ClientOnly;
