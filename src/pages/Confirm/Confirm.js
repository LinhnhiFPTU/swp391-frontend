import { useEffect, useState, usesea } from "react";
import { useSearchParams } from "react-router-dom";
import HeaderForm from "~/layouts/components/HeaderForm";
import Modal from "~/layouts/components/Modal";
import ModalFail from "~/layouts/components/ModalFail";
import "./Confirm.module.scss";
import axios from "axios";

function Confirm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
      console.log(msg);
      let token = searchParams.get("token");
      console.log(token);
      axios
        .get("/api/v1/auths/registration/confirm?token=" + token)
        .then((res) => {
          setSuccess(true);
          setMsg(res.data.status);
        })
        .catch((e) => {
          (msg.length === 0) && setMsg(e.response.data.message);
        });
  }, []);

  return (
    <>
      {success ? (
        <Modal message="Confirm Success" subMessage={msg} path="/login" />
      ) : (
        <ModalFail message="Confirm Fail" subMessage={msg} path="/" />
      )}
      <HeaderForm />
    </>
  );
}

export default Confirm;
