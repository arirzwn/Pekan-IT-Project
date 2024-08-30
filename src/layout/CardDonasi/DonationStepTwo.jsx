import Header from "../../components/Component Donasi/Header.jsx";
import Step from "../../components/Component Donasi/Step.jsx";
import DetailInformasi from "../../components/Component Donasi/DetailInformasi.jsx";

export default function DonationStepTwo({
  setFormValid,
  formSubmitted,
  formErrors,
  activeStep,
}) {
  return (
    <>
      <div className="flex pb-5 justify-between">
        <Header>Informasi Pribadi</Header>
        <Step activeStep={activeStep} />
      </div>
      <DetailInformasi
        setFormValid={setFormValid}
        formSubmitted={formSubmitted}
        formErrors={formErrors}
      />
    </>
  );
}
