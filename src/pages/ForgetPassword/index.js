import { useEffect, useState } from "react";

import Footer from "~/layouts/components/Footer";
import HeaderForm from "~/layouts/components/HeaderForm";
import Forget from "~/pages/ForgetPassword/Forget";
import Verify from "~/pages/ForgetPassword/Verify";
import NewPassword from "~/pages/ForgetPassword/NewPassword";
import axios from "axios";

function ForgetPassword() {
  const steps = [Forget, Verify, NewPassword];
  const [step, setStep] = useState(0);
  const [arg, setArg] = useState();
  const [user, setUser] = useState();
  const [errMsg, setErrMsg] = useState("");
  let CurStep = steps[step];

  useEffect(() => {
    if (arg) {
      switch (step) {
        case 0:
          axios
            .get("/api/v1/auths/reset/find", { params: { email: arg.email } })
            .then((res) => {
              setUser(res.data);
              setArg(null);
              setStep((step) => step + 1);
            });
          break;
        case 1:
          axios
            .post("/api/v1/auths/reset/confirm", user, {
              params: { code: arg.code },
            })
            .then((res) => {
              console.log(res);
              setErrMsg("Code isn't match");
              setStep((step) => step + 1);
            })
            .catch((e) => {
              setErrMsg("Code isn't match");
            });
          break;
        default: break;
      }
    }
  }, [arg]);

  useEffect(() => {
    if (user) {
      axios.post("/api/v1/auths/reset/send", user).then((res) => {
        console.log(res);
      });
    }
  }, [user]);

  const handleSubmit = (e, args) => {
    e.preventDefault();
    if (args) {
      setArg(args);
    }
  };

  return (
    <>
      <HeaderForm />
      <CurStep onClick={handleSubmit} errMsg={errMsg} />
      <Footer />
    </>
  );
}

export default ForgetPassword;
