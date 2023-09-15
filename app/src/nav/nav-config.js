// component
import SvgColor from '../ui-components/shared/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/menu-bar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/app/dashboard',
    icon: icon('home'),
  },
  {
    title: 'Prompt Libary',
    path: '/app/prompt-lib',
    icon: icon('diamond'),
  },
  {
    title: 'Customer',
    path: '/app/customer',
    icon: icon('shop'),
  },
];

export { navConfig };
