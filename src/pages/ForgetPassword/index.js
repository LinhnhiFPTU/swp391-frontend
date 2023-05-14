import { useState } from 'react'

import Footer from "~/layouts/components/Footer";
import HeaderForm from "~/layouts/components/HeaderForm";
import Forget from "~/pages/ForgetPassword/Forget";
import Verify from "~/pages/ForgetPassword/Verify";
import NewPassword from "~/pages/ForgetPassword/NewPassword";

function ForgetPassword() { 
  const steps = [Forget, Verify, NewPassword]
  const [step, setStep] = useState(0)
  let CurStep = steps[step]

  const handleSubmit = (e, args) => {
    e.preventDefault()
    console.log(args)
    setStep(step => step + 1)
  }

  return (
    <>
      <HeaderForm />
      <CurStep onClick={handleSubmit}/>
      <Footer />
    </>
  );
}

export default ForgetPassword;
