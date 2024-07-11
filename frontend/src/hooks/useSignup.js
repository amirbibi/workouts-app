import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const API_URL = 'http://localhost:4000/api/users/';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (formData) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${API_URL}signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const responseJson = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(responseJson.error);
    }

    if (response.ok) {
      // Save user (token) in local storage
      localStorage.setItem('user', JSON.stringify(responseJson));

      // Dispatch action to save user in context
      dispatch({ type: 'LOGIN', payload: responseJson })

      setIsLoading(false);
    }
  }

  return { signup, isLoading, error }
}
