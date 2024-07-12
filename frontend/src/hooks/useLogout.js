import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = async (formData) => {

    // remove user from localstorage 
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' })

  }

  return { logout }
}
