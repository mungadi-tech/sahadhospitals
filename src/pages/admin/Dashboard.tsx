import { DashboardAdmin } from "./DashboardAdmin";
import { DashboardUser } from "./DashboardUser";

export default function Dashboard() {
  const isAdmin = true;
  return (
    <div>
      <span className="font-bold text-5xl text-slate-800">Dashboard</span>
      {isAdmin && <DashboardAdmin />}
      <div>{!isAdmin && <DashboardUser />}</div>
    </div>
  );
}
