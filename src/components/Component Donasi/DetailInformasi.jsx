import { useState, useEffect } from "react";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import PropTypes from "prop-types";

export default function DetailInformasi({ setFormValid, formSubmitted }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    province: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setIsAnonymous(checked);
      if (checked) {
        setFormData({ ...formData, firstName: "", lastName: "" });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    validateForm();
  }, [formData, isAnonymous]);

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (
        !formData[key] &&
        !(isAnonymous && (key === "firstName" || key === "lastName"))
      ) {
        errors[key] = "This field is required";
      }
    });
    setFormErrors(errors);
    setFormValid(Object.keys(errors).length === 0);
  };

  return (
    <div className="flex flex-col gap-y-4 text-sm text-[#47A603]">
      <form className="">
        <div className="flex gap-x-5">
          <div
            className={`flex items-center border-b py-2 ${formSubmitted && formErrors.firstName ? "border-red-600" : isAnonymous ? "border-gray-400" : "border-[#47A603]"}`}
          >
            <IoMdPerson
              className={isAnonymous ? "text-gray-400" : "text-[#47A603]"}
            />
            <input
              className={`appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#47A603] placeholder:opacity-70 ${isAnonymous ? "text-gray-400 placeholder:text-gray-400" : ""}`}
              type="text"
              name="firstName"
              placeholder="Nama Depan"
              value={formData.firstName}
              onChange={handleChange}
              disabled={isAnonymous}
            />
          </div>
          <div
            className={`flex items-center border-b py-2 ${formSubmitted && formErrors.lastName ? "border-red-600" : isAnonymous ? "border-gray-400" : "border-[#47A603]"}`}
          >
            <input
              className={`appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#47A603] placeholder:opacity-70 ${isAnonymous ? "text-gray-400 placeholder:text-gray-400" : ""}`}
              type="text"
              name="lastName"
              placeholder="Nama Belakang"
              value={formData.lastName}
              onChange={handleChange}
              disabled={isAnonymous}
            />
          </div>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            className="checkbok mr-2"
            checked={isAnonymous}
            onChange={handleChange}
          />
          <span className="text-xs">Jadikan donasi sebagai anonim</span>
        </div>
      </form>
      <form className="flex gap-x-5">
        <div
          className={`flex w-full items-center border-b py-2 ${formSubmitted && formErrors.email ? "border-red-600" : "border-[#47A603]"}`}
        >
          <MdOutlineMailOutline />
          <input
            className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#47A603] placeholder:opacity-70"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>
      <form className="flex gap-x-5">
        <div>
          <div
            className={`flex w-full items-center border-b py-2 ${formSubmitted && formErrors.address ? "border-red-600" : "border-[#47A603]"}`}
          >
            <FaMapMarkerAlt />
            <input
              className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#47A603] placeholder:opacity-70"
              type="text"
              name="address"
              placeholder="Alamat"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-x-10">
            <div
              className={`flex items-center border-b py-2 ${formSubmitted && formErrors.city ? "border-red-600" : "border-[#47A603]"}`}
            >
              <input
                className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#47A603] placeholder:opacity-70"
                type="text"
                name="city"
                placeholder="Kota"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div
              className={`flex items-center border-b py-2 ${formSubmitted && formErrors.province ? "border-red-600" : "border-[#47A603]"}`}
            >
              <input
                className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#47A603] placeholder:opacity-70"
                type="text"
                name="province"
                placeholder="Provinsi"
                value={formData.province}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex gap-x-5">
            <div
              className={`flex w-full items-center border-b py-2 ${formSubmitted && formErrors.phone ? "border-red-600" : "border-[#47A603]"}`}
            >
              <BsFillTelephoneFill />
              <input
                className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#47A603] placeholder:opacity-70"
                type="text"
                name="phone"
                placeholder="Telepon"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex items-start">
        <input type="checkbox" className="checkbox-xs mr-2 my-[0.1rem]" />
        <span className="text-xs">
          Saya menyatakan bahwa informasi pribadi yang saya berikan adalah
          benar, akurat, dan dapat digunakan untuk keperluan donasi ini.
        </span>
      </div>
    </div>
  );
}

DetailInformasi.propTypes = {
  setFormValid: PropTypes.func.isRequired,
  formSubmitted: PropTypes.bool.isRequired,
};
