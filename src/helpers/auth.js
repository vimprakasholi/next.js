const { ADMIN, MERCHANT } = require("@/constants/roles");

export function allowedAdminRoles(userRoles) {
  const adminRoles = [ADMIN, MERCHANT];
  return userRoles?.some((role) => adminRoles.includes(role));
}
