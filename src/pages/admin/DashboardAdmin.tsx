import { users_columns } from "@/components/table/colums/users_columns";
import { data } from "@/components/table/data/data";
import { DynamicTable } from "@/components/table/data_tables/DynamicTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Badge,
  CircleSlash,
  FileCheck,
  HardHat,
  Plus,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Job } from "./Job";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const cardContentAdmin = [
  {
    title: "Users",
    icon: <User />,
    Numb: "98",
    value: "20",
    actions: (
      <div className="mt-4">
        <Button>
          New User <Plus className="ml-2" />
        </Button>
      </div>
    ),
  },
  {
    title: "Jobs",
    icon: <HardHat />,
    Numb: "86",
    value: "30%",
    actions: (
      <div className="mt-4 flex justify-center items-center gap-3">
        <Job />
        <Link to={""}>
          <Button variant={"outline"}>Manage Jobs</Button>
        </Link>
      </div>
    ),
  },
  {
    title: "Recruites",
    icon: <CircleSlash />,
    Numb: "4356",
    value: "40%",
    actions: (
      <div className="mt-4 flex justify-center items-center gap-3">
        <Button>
          Recruites <User className="ml-2" />
        </Button>
        <Link to={""}>
          <Button variant={"outline"}>Manage Recruites</Button>
        </Link>
      </div>
    ),
  },
  {
    title: "Interview",
    icon: <FileCheck />,
    Numb: "9806",
    value: "50%",
    actions: (
      <div className="mt-4 flex justify-center items-center gap-3">
        <Button>
          Interviews <Plus className="ml-2" />
        </Button>
        <Link to={""}>
          <Button variant={"outline"}>Manage Interview</Button>
        </Link>
      </div>
    ),
  },
];

export const DashboardAdmin = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-4 bg-slate-100 p-4">
        {cardContentAdmin.map((c) => (
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
              <span className="font-bold text-5xl text-slate-800">
                {c.Numb}
              </span>
              {c.actions}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="md:flex">
        <div className="w-full px-4">
          <h1 className="font-bold text-4xl mb-4 inline-flex ">Users</h1>
          <DynamicTable columns={users_columns} data={data} />
        </div>
        <div>
          <RecentActivities />
          <RecruteStatistics />
        </div>
      </div>
    </>
  );
};

const RecentActivities = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-xs mb-4 bg-info inline-flex text-white p-2 rounded-lg mx-auto">
        Recent Activities
      </h1>
      <div className="flex text-xs p-4 gap-2 mt-4 justify-center items-center">
        <span>2 days ago</span>
        <span className="h-4 text-green-700 bg-green-700 rounded-full p-2"></span>
        <span>Mr. Stephen Fayomi</span>
        <span>Applied for Medical Officers Sahad Hospital Apo</span>
        <Badge>Full-Time</Badge>
      </div>
    </div>
  );
};

const RecruteStatistics = () => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-xs mb-4 bg-info inline-flex text-white p-2 rounded-lg mx-auto">
        Recruite Statistics
      </h1>

      <div className="p-4">
        <Table className="text-xs">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SN</TableHead>
              <TableHead>Medevolt Devision</TableHead>
              <TableHead className="text-right">Numbers</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  <Badge>{invoice.totalAmount}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
