import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

type UserAvatarProps = {
  expanded: boolean;
};

export default function UserAvatar({ expanded }: UserAvatarProps) {
  const { user } = useAuth();
  return (
    <Link
      title={`${(user.name, user.surname)} profile picture`}
      type="button"
      className="user-avatar-container | clickable | flex"
      to="/dashboard/profile"
      aria-label="User profile"
      aria-labelledby="user-avatar"
    >
      <img
        className="user-avatar"
        src={user.avatar}
        alt={`${(user.name, user.surname)} profile picture`}
      />
      {expanded && (
        <article className="user-avatar-info-container | grid">
          <span className="user-name-label">
            {user.name} {user.surname}
          </span>
          <span className="user-role-label | any">{user.role}</span>
        </article>
      )}
    </Link>
  );
}
