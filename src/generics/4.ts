type UserProfileInfo = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export function createOrUpdateUser(
  initialValues: Partial<UserProfileInfo>
): UserProfileInfo {
  const defaultUserProfileInfo: UserProfileInfo = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaultUserProfileInfo, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
