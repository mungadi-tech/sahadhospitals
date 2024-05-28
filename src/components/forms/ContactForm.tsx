import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  return (
    <div className="w-full z-10">
      <span className="text-4xl font-bold">Contact Us</span>
      <span>
        We have a dedicated support center for all of your support needs. <br />{" "}
        We usually get back to you within 12-24 hours.
      </span>
      <Input placeholder="First Name" className="border-input" />
      <Input placeholder="Last Names" />
      <Input placeholder="Email" />
      <Textarea placeholder="Message" />
      <Button disabled color="green">
        Send
      </Button>
    </div>
  );
}
