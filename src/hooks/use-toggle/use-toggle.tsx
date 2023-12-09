import {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

const UseToggle = () => {
  const [show, setShow] = useState<boolean>(false);
  const location = useLocation(); // This will give you the current location object
  const {pathname, search} = location;

  useEffect(() => {
    setShow(false)
  }, [pathname, search]);

  const toggleHandler = () => {
    setShow(!show)
  }

  const showHandler = () => {
    setShow(true)
  }

  const closeHandler = () => {
    setShow(false)
  }

  return {
    show,
    toggleHandler,
    showHandler,
    closeHandler,
  };
}

export default UseToggle;