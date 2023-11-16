import { useEffect } from "react";
import styles from "./AuthForm.module.scss";
import { User2, Mail, LockKeyhole } from "lucide-react";
import Loader from "../../ui/Loader/Loader";
import AuthInput from "../../ui/AuthInput/AuthInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { authValidationSchema } from "../model/authValidationSchema";
import { AuthInputs } from "../model/types";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

type Props = {};

const AuthForm = (props: Props) => {
  const { isLoading, isSuccess, isError, mockAuth } = useAuth();
  const onSubmit: SubmitHandler<AuthInputs> = (data) => mockAuth(data, 5000);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({ resolver: zodResolver(authValidationSchema) });

  useEffect(() => {
    if (isSuccess) {
      navigate("/home");
    }
  }, [isSuccess]);

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.authHeader}>
        <div className={styles.userIcon}>
          <User2 />
        </div>
        <h2>Войдите с почтой</h2>
      </div>

      <div className={styles.authInputs}>
        <AuthInput
          icon={<Mail />}
          placeholder="EMAIl"
          inputType="text"
          submitError={isError}
          validationError={errors.email?.message}
          register={{ ...register("email", { required: true }) }}
        />
        <AuthInput
          icon={<LockKeyhole />}
          inputType="password"
          placeholder="ПАРОЛЬ"
          submitError={isError}
          validationError={errors.password?.message}
          register={{ ...register("password", { required: true }) }}
        />
        {isError && <p>Введен неверный логин или пароль</p>}
      </div>

      <div className={styles.authActions}>
        <button type="submit" disabled={isLoading || isSuccess}>
          Войти
        </button>
      </div>

      <CSSTransition
        in={isLoading}
        timeout={300}
        classNames={{
          enter: styles.fadeEnter,
          enterActive: styles.fadeEnterActive,
          exit: styles.fadeExit,
          exitActive: styles.fadeExitActive,
        }}
        unmountOnExit
      >
        <div className={styles.formLoading}>
          <Loader />
        </div>
      </CSSTransition>
    </form>
  );
};

export default AuthForm;
