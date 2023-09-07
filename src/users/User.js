import "./User.css";

export const User = ({ user }) => {
  return (
    <div className="user">
      <div>
        <label className="user-info">Name</label>
        <div>{user.fullName}</div>
      </div>
      <div>
        <label className="user-info">Email</label>
        <div>{user.email}</div>
      </div>
    </div>
  );
};
