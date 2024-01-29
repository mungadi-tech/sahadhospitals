import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleSlash, FileCheck, HardHat, User } from "lucide-react";

const cardContentUser = [
  {
    title: "Jobs Applied",
    icon: <HardHat />,
    Numb: "98",
    value: "20",
    color: "bg-gradient-to-r from-secondary to-primary",
  },
  {
    title: "Active Interview Questions",
    icon: <User />,
    Numb: "86",
    value: "30%",
    color: "bg-gradient-to-r from-secondary to-primary",
  },
  {
    title: "Interview Results",
    icon: <CircleSlash />,
    Numb: "4356",
    value: "40%",
    color: "bg-gradient-to-r from-secondary to-primary",
  },
  {
    title: "Your Offer(s)",
    icon: <FileCheck />,
    Numb: "9806",
    value: "50%",
    color: "bg-gradient-to-r from-secondary to-primary",
  },
];

export const DashboardUser = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 bg-slate-100 p-4">
      {cardContentUser.map((c) => (
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-slate-400">
              <div className="flex justify-between">
                <span>{c.title}</span>
                <span>{c.icon}</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <span className="font-bold text-5xl text-slate-800">{c.Numb}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
