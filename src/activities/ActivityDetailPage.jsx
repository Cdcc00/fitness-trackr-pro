import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { getActivity, deleteActivity } from "../api/activities";

export default function ActivityDetailPage() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const { token } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const findActivity = async () => {
      setActivity(await getActivity(id));
    };

    findActivity();
  }, [id]);


  const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!activity) return <p>Loading...</p>;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>Created by {activity.creatorName}</p>
      <p>{activity.description}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </>
  );
}
