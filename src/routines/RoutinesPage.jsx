import { useRoutines } from "../api/RoutinesContext";
import RoutineList from "./RoutineList";
import { useAuth } from "../auth/AuthContext";

export default function RoutinesPage() {
  const { routines } = useRoutines();

  const { token } = useAuth();

  return (
    <>
      <h1>Routines</h1>
      <RoutineList />

      {token ? <h1>form</h1> : undefined}
    </>
  );
}
