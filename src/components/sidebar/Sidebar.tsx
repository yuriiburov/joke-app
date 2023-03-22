import { useState } from 'react';
import Button from '../UI/Button/Button';
import classes from './Sidebar.module.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const visibilityButtonContent = isOpen ? '<<<' : '>>>';

  const toggleVisibility = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${classes.sidebar} ${isOpen ? classes['sidebar_open'] : ''}`}
    >
      <div className={classes.sidebar__content}>
        <Button
          onClick={toggleVisibility}
          className={classes['sidebar__visibility-btn']}
        >
          {visibilityButtonContent}
        </Button>
        <div style={{ color: '#f00' }}>
          {
            'dhjvj dbsjbvf bvjdfbj bscvudsgv usbvbjfv vfs bdf js b vfvjbvej bvcjbvbrjbjvbje rsevb jerjbvebjvjbervbjk'
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
