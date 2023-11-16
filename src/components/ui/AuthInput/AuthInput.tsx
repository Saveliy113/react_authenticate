import React, { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import styles from "./AuthInput.module.scss";

type AuthInputProps = {
  placeholder: string;
  icon: ReactNode;
  inputType: string;
  submitError: boolean;
  validationError: string | undefined;
  register: UseFormRegisterReturn;
};

const AuthInput: React.FC<AuthInputProps> = ({
  placeholder,
  icon,
  submitError,
  validationError,
  inputType,
  register,
}) => {
  return (
    <div
      className={clsx(
        styles.authInput,
        (submitError || validationError) && styles.error
      )}
    >
      <div className={styles.inputIcon}>{icon}</div>
      <input type={inputType} placeholder={placeholder} {...register} />
      {validationError && (
        <p className={styles.errorMessage}>{validationError}</p>
      )}
    </div>
  );
};

export default AuthInput;
