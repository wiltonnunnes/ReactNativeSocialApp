import { useState } from 'react';

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [rightIcon, setRightIcon] = useState('eye');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
    }
    setPasswordVisibility(!passwordVisibility);
  }

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility
  };
};