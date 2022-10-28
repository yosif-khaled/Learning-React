export const UserGreeting = () => {
    const isLoggedIn = true;
  return (
    // <div>Welcome {isLoggedIn ? 'UserName' : 'Guest'}</div>
    <div>Welcome {isLoggedIn && 'UserName'}</div>
  );
}