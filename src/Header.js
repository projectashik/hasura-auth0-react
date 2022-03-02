import { useAuth0 } from "@auth0/auth0-react";

export function Header() {
  const { user, isAuthenticated, isLoading, loginWithPopup, logout } =
    useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      {isAuthenticated && (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={() => logout()}>Logout</button>
        </div>
      )}

      {!isAuthenticated && (
        <div>
          <p>You're not logged in.</p>
          <button onClick={() => loginWithPopup()}>Log in</button>
        </div>
      )}
    </>
  );
}
