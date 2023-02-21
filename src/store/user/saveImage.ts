import { API_HOST } from "../../data/constants";

const saveImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
  if (!e.target.files) {
    return;
  }
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  console.log(e.target.files[0]);
  const response = await fetch(`${API_HOST}image/`, {
    method: "POST",
    body: formData,
  });
  const { url } = await response.json();
  return url;
};

export default saveImage;
