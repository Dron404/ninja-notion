function autorizationCheck() {
  const token = localStorage.getItem("refreshToken");
  if (token) {
    window.location.replace("/pages/home");
  }
}

export default autorizationCheck;
