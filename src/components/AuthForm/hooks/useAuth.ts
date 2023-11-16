import { useState } from "react";

type AuthData = {
  email: string;
  password: string;
};

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const mockAuth = async (authData: AuthData, timeout: number) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);

      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (
            authData.email === "test@test.ru" &&
            authData.password === "test12345"
          ) {
            setIsSuccess(true);
            resolve("Authorized Successfully");
          } else {
            setIsError(true);
            reject("Введен неверный логин или пароль");
          }
        }, timeout);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isSuccess,
    isError,
    mockAuth,
  };
};
