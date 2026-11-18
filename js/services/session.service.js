const USER_STORAGE_KEY = "e-ring-user";

export function saveLoggedUser(email) {
  const user = {
    email
  };

  sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

export function getLoggedUser() {
  const storedUser = sessionStorage.getItem(USER_STORAGE_KEY);

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    return null;
  }
}

export function clearLoggedUser() {
  sessionStorage.removeItem(USER_STORAGE_KEY);
}