import { useEffect, useState } from "react";

const errorString = "Hubo un error en el envío, vuelva a intentarlo.";
const useContactForm = () => {
  const [formData, setFormData] = useState({});
  const [name, setName] = useState<string | null>("");
  const [phone, setPhone] = useState<string | null>("");
  const [company, setCompany] = useState<string | null>("");
  const [comments, setComments] = useState<string | null>("");
  const [apiResponse, setApiResponse] = useState<any | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState<boolean | null>(true);
  const [apiLoading, setApiLoading] = useState<boolean | null>(false);
  useEffect(() => {
    if (name && phone && company && comments) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, phone, company, comments]);
  const clearForm = () => {
    setName("");
    setCompany("");
    setPhone("");
    setComments("");
  };
  const handleSubmit = async () => {
    setApiLoading(true);
    const formData = new FormData();
    if (name && phone && company && comments) {
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("company", company);
      formData.append("comments", comments);
    }
    try {
      const response = await fetch(
        "https://apis.webrocket.services/v1/email/contact?v=ductiline",
        {
          method: "POST",
          body: formData,
        }
      );
      console.log(response, response.ok);
      if (response.ok) {
        const responseData = await response.json();
        setApiResponse({ message: "¡Mensaje Enviado!", type: "success" });
        clearForm();
        console.log(responseData);
      } else {
        throw new Error("Failed to send data");
      }
    } catch (error) {
      setApiResponse({ message: errorString, type: "error" });
      console.log(error);
    } finally {
      setApiLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    name,
    setName,
    phone,
    setPhone,
    company,
    setCompany,
    comments,
    setComments,
    apiResponse,
    buttonDisabled,
    apiLoading,
  };
};

export default useContactForm;
