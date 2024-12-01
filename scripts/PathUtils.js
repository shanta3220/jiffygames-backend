const getBaseUrl = () => {
  const { DB_HOST, NODE_ENV } = process.env;

  if (!DB_HOST) {
    throw new Error("DB_HOST is not defined in environment variables");
  }

  if (NODE_ENV === "production") {
    return `https://${DB_HOST}`;
  }

  const PORT = process.env.PORT || 5050;
  return `http://${DB_HOST}:${PORT}`;
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
