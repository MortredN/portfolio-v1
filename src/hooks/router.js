import { useNavigate, useLocation, useParams } from 'react-router'

export function useRouter() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  return {
    push: (path) => navigate(path),
    replace: (path) => navigate(path, { replace: true }),
    back: () => navigate(-1),
    path: location.pathname,
    query: Object.fromEntries(new URLSearchParams(location.search)),
    params
  }
}
