import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router";

export default function ActivityList({ activities, syncActivities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
          syncActivities={syncActivities}
        />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity, syncActivities }) {
  const { token } = useAuth();

  const [error, setError] = useState(null);


  return (
    <li>
      <Link to={`/${activity.id}`} > {activity.name} </Link>
      {error && <p role="alert">{error}</p>}
    </li>
  );
}
