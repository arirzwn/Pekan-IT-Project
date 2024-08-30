// src/components/Component%20Donasi/Step.jsx
export default function Step({ activeStep }) {
  const steps = [0, 1, 2];
  return (
    <div className="flex gap-2">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`block rounded-full h-3 w-3 ${
            activeStep === index ? "bg-green-700" : "bg-green-200"
          }`}
        ></div>
      ))}
    </div>
  );
}
