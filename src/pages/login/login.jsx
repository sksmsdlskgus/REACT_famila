import * as styles from "./loginStyle";
import UserApi from "../../utils/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../utils/store/reducer/user";
import { useNavigate } from "react-router-dom";
import { noAuthApi } from "../../utils/interceptor/axiosInterceptor";
import LoadingScreen from "../../components/loading/loading";
import logo from "../../assets/logo.png";
import kakaoLogin from "../../assets/kakaoLogin.png";
import PhoneLogin from "../../assets/PhoneLogin.png";
import NoLogin from "../../assets/NoLogin.png";

export default function Login() {
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const viewIntro = localStorage.getItem("visited");

  useEffect(() => {
    if (!viewIntro) {
      navigate("/intro");
    } else {
      if (userData.value.isAuthorized) {
        navigate("/");
      }
    }
  }, []);

  return (
    <styles.Container>
      <styles.ServiceInfo>
        <styles.LogoImage src={logo} />
      </styles.ServiceInfo>
      <styles.KakaoButton onClick={() => alert("준비중입니다")}>
        <styles.kakaoImage src={kakaoLogin} />
      </styles.KakaoButton>
      <styles.PhoneButton onClick={() => navigate("/phoneLogin")}>
        <styles.PhoneImage src={PhoneLogin} />
      </styles.PhoneButton>
      <styles.NoLoginButton onClick={() => navigate("/")}>
        <styles.NoLoginImage src={NoLogin} />
      </styles.NoLoginButton>
      {isLoading && <LoadingScreen />}
    </styles.Container>
  );
}
