import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import useWindowSize from '../../hooks/useWindowSize';

const Navbar = (): JSX.Element => {
  const size = useWindowSize();

  return <>{size.width && size.width < 600 ? <MobileNav /> : <DesktopNav />}</>;
};

export default Navbar;
