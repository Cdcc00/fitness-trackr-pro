import { useState, useEffect } from "react";
import { getActivities } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";

export default function ActivitiesPage() {
  const [activities, setActivities] = useState([]);

  const { token } = useAuth();

  const syncActivities = async () => {
    const data = await getActivities();
    setActivities(data);
  };

  useEffect(() => {
    syncActivities();
  }, []);

  return (
    <>
      <h1>Activities</h1>
      <ActivityList activities={activities} syncActivities={syncActivities} />
      {token ?  <ActivityForm syncActivities={syncActivities} /> : undefined}
    </>
  );
}
