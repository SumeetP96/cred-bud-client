import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useLayout } from '../../layouts/hooks/use-layout';

interface IBreadCrumb {
  label: string;
  to?: string;
  active?: boolean;
  disabled?: boolean;
}

export interface IPageProps {
  header: string;
  title?: string;
  breadcrumbs?: IBreadCrumb[];
  children: React.ReactNode;
}

function Page({ children, header, title, breadcrumbs }: IPageProps) {
  const navigate = useNavigate();

  const location = useLocation();

  const layout = useLayout();

  useEffect(() => {
    layout.actions.setAppBarHeader(header);
    if (title) {
      document.title = `${header} - ${title}`;
    }
  }, [header, layout.actions, location.pathname, title]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 1, lg: 2 },
      }}
    >
      {title ? (
        <Typography variant="h5" component="h5" fontWeight="500">
          {title}
        </Typography>
      ) : null}

      {breadcrumbs?.length ? (
        <Breadcrumbs separator="•">
          {breadcrumbs.map(({ label, to, active, disabled }) => (
            <Link
              key={to}
              underline={active || disabled ? 'none' : 'hover'}
              color={active || disabled ? 'textDisabled' : 'inherit'}
              onClick={() => {
                if (active || disabled || !to) return;
                navigate(to);
              }}
              variant="subtitle2"
              sx={{
                cursor: active || disabled ? 'not-allowed' : 'pointer',
              }}
            >
              {label}
            </Link>
          ))}
        </Breadcrumbs>
      ) : null}

      {children}
    </Box>
  );
}

export default Page;
