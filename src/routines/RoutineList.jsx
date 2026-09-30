import { useRoutines } from "../api/RoutinesContext";
import RoutineListItem from "./RoutineListItem";

export default function RoutineList() {
  const { routines } = useRoutines();
  return (
    <ul>
      {routines.map((routine) => {
        return <RoutineListItem routine={routine} key = {routine.id}/>;
      })}
    </ul>
  );
}
