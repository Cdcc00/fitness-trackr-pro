import { Link } from "react-router";

export default function RoutineListItem({ routine }) {
  return <li>
    <Link to={`/routines/${routine.id}`}> {routine.name}</Link></li>;
}
