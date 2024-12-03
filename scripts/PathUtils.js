const getBaseUrl = () => {
  const { BACKEND_URL, NODE_ENV } = process.env;

  if (!BACKEND_URL) {
    throw new Error("DB_HOST is not defined in environment variables");
  }

  if (NODE_ENV === "production") {
    return `https://${BACKEND_URL}`;
  }

  const PORT = process.env.PORT || 5050;
  return `http://${BACKEND_URL}:${PORT}`;
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
