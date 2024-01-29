import { JobForm } from "@/components/forms/JobForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Job = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Post Job</Button>
      </DialogTrigger>
      <DialogContent className=" rounded-md">
        <JobForm
          input={{
            description: "",
            jobType: [],
            location: "",
            role: [],
            staffQuantity: 0,
            title: "",
            isClosed: false,
            isCompleted: false,
            isOpen: false,
            publish: false,
            shouldDelete: false,
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
