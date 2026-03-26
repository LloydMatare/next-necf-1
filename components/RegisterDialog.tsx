"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { X, Plus } from "lucide-react";

interface RegisterDialogProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
}

const RegisterDialog = ({
  isOpen,
  onClose,
  eventTitle,
}: RegisterDialogProps) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    tel: "",
    mobile: "",
    email: "",
  });
  const [delegates, setDelegates] = useState([
    { title: "", fullName: "", nationalID: "", email: "", mobile: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelegateChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedDelegates = [...delegates];
    //@ts-ignore
    updatedDelegates[index][field] = value;
    setDelegates(updatedDelegates);
  };

  const addDelegate = () => {
    setDelegates([
      ...delegates,
      { title: "", fullName: "", nationalID: "", email: "", mobile: "" },
    ]);
  };

  const removeDelegate = (index: number) => {
    setDelegates(delegates.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/delegates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, eventTitle, delegates }),
    });

    if (response.ok) {
      setMessage("Registration successful!");
      setFormData({
        companyName: "",
        contactPerson: "",
        tel: "",
        mobile: "",
        email: "",
      });
      setDelegates([
        { title: "", fullName: "", nationalID: "", email: "", mobile: "" },
      ]);
    } else {
      setMessage("Error registering for event.");
    }

    setLoading(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="max-h-[85vh] w-[min(96vw,760px)] overflow-y-auto rounded-3xl bg-background/90 p-0 ring-1 ring-border/60 backdrop-blur">
        <div className="relative overflow-hidden rounded-t-3xl border-b border-border/60 bg-[radial-gradient(900px_420px_at_0%_0%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(900px_420px_at_100%_0%,rgba(163,230,53,0.14),transparent_55%)] px-6 py-6">
          <DialogHeader>
            <p className="text-xs font-semibold tracking-widest text-emerald-900/80">
              EVENT REGISTRATION
            </p>
            <DialogTitle className="mt-2 text-balance font-[var(--font-display)] text-2xl leading-tight">
              Register for {eventTitle}
            </DialogTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your organization details and add each delegate attending.
            </p>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 p-6">
          <section className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Organization</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Primary contact details for invoicing and communication.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person for Payment</Label>
                <Input
                  id="contactPerson"
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tel">Telephone Number</Label>
                <Input
                  id="tel"
                  type="tel"
                  name="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Delegates</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Add each delegate who will attend. You can add multiple.
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="h-10 rounded-xl"
                onClick={addDelegate}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Delegate
              </Button>
            </div>

            <div className="space-y-3">
              {delegates.map((delegate, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl bg-background/60 p-4 ring-1 ring-border/60"
                >
                  {delegates.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => removeDelegate(index)}
                      className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-xl bg-background/70 text-muted-foreground ring-1 ring-border/60 hover:text-red-600"
                      aria-label="Remove delegate"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  ) : null}

                  <div className="grid gap-3 md:grid-cols-2">
                    <Input
                      type="text"
                      placeholder="Title"
                      value={delegate.title}
                      onChange={(e) =>
                        handleDelegateChange(index, "title", e.target.value)
                      }
                      required
                      className="rounded-xl"
                    />
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={delegate.fullName}
                      onChange={(e) =>
                        handleDelegateChange(index, "fullName", e.target.value)
                      }
                      required
                      className="rounded-xl"
                    />
                    <Input
                      type="text"
                      placeholder="National ID"
                      value={delegate.nationalID}
                      onChange={(e) =>
                        handleDelegateChange(index, "nationalID", e.target.value)
                      }
                      required
                      className="rounded-xl"
                    />
                    <Input
                      type="email"
                      placeholder="Delegate Email"
                      value={delegate.email}
                      onChange={(e) =>
                        handleDelegateChange(index, "email", e.target.value)
                      }
                      required
                      className="rounded-xl"
                    />
                    <Input
                      type="tel"
                      placeholder="Delegate Mobile"
                      value={delegate.mobile}
                      onChange={(e) =>
                        handleDelegateChange(index, "mobile", e.target.value)
                      }
                      required
                      className="rounded-xl md:col-span-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-emerald-950 p-5 text-white ring-1 ring-emerald-900/40">
            <p className="text-xs font-semibold tracking-widest text-white/70">
              PAYMENT
            </p>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Conference Package:</span> US$ 350
              (includes teas, lunch, memorabilia, and materials).
            </p>
            <p className="mt-3 text-sm">
              <span className="font-semibold">Bank Details:</span> NECF, A/C No:
              2210129490220, FBC, Samora Machel Avenue Branch, Branch Code: 8101
            </p>
            <p className="mt-3 text-sm">
              <span className="font-semibold">For ZIG payments:</span> Contact
              Mrs Agnes Kawiri (0773851644) or Ms Rudo Njerere (0773481088).
            </p>
            <p className="mt-3 text-sm">
              Send proof of payment to rnjerere@necf.org.zw, njerererudo@gmail.com
            </p>
          </section>

          <div className="space-y-3">
            <Button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-xl bg-emerald-700 hover:bg-emerald-600"
            >
              {loading ? "Registering..." : "Submit registration"}
            </Button>
            {message ? (
              <p
                className={
                  message.toLowerCase().includes("successful")
                    ? "text-sm text-emerald-700"
                    : "text-sm text-red-600"
                }
              >
                {message}
              </p>
            ) : null}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
