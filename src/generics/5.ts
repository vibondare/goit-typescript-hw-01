export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type Roles = Record<UserRole, string>;

const RoleDescription: Roles = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
