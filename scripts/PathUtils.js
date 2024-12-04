const getBaseUrl = () => {
  const { BACKEND_URL, NODE_ENV } = process.env;

  if (!BACKEND_URL) {
    if (NODE_ENV === "development") {
      return "http://localhost:5050";
    }
    throw new Error("BACKEND_URL is not defined in environment variables");
  }

  return NODE_ENV === "production"
    ? `https://${BACKEND_URL}`
    : `http://${BACKEND_URL}:${process.env.PORT || 5050}`;
};

const baseUrl = getBaseUrl();

export const getFullPath = (avatarPath) => {
  return `${baseUrl}/${avatarPath}`;
};

export const getAvatarPath = (avatarPath) => {
  return `${baseUrl}/${
    avatarPath ? avatarPath : "images/avatars/default-avatar.png"
  }`;
};
