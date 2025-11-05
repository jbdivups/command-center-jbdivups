import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function AuthRedirector() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const [tenantId, environmentId] = searchParams.values();

    localStorage.setItem('tenantId', tenantId!);
    localStorage.setItem('environmentId', environmentId!);

    navigate('/command-center/dashboard', { replace: true });
  }, []);

  return null;
}

export default AuthRedirector;
