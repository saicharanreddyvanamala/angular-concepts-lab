import { AuthService } from "../../routing/auth.service";

export function apiUrlFactory(auth: AuthService): string {
  return auth.isLoggedIn
    ? 'https://secure-api.myapp.com'
    : 'https://public-api.myapp.com';
}
