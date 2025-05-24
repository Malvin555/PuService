import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/common/PageHeader";
import { getCurrentUser } from "@/lib/getCurrentUser";

export const metadata = {
  title: "PuService - User Profile",
  description: "Manage your account information and preferences",
};

export default async function ProfilePage() {
  const user = await getCurrentUser();
  return (
    <>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <PageHeader
            title="Your Profile"
            description="Manage your account information and preferences."
          />

          <div className="bg-card shadow-sm overflow-hidden rounded-lg border border-border mb-10">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-foreground">
                  Personal Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  Update your personal details.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-medium">
                  {user?.name?.slice(0, 2).toUpperCase() || "NA"}
                </div>
              </div>
            </div>
            <div className="border-t border-border px-4 py-5 sm:p-6">
              <form
                className="space-y-6"
                action="/api/profile/update"
                method="POST"
              >
                <div className="gap-y-10 gap-x-4">
                  <div className="sm:col-span-3">
                    <Label>Username</Label>

                    <div className="mt-1">
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={user!.name}
                      ></Input>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label>Email Adress</Label>
                    <div className="mt-1">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue={user!.email}
                      ></Input>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label>Phone Number</Label>
                    <div className="mt-1">
                      <Input
                        type="text"
                        name="phone_number"
                        id="phone"
                        defaultValue={user!.phone}
                      ></Input>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label>Street Address</Label>
                    <div className="mt-1">
                      <Input
                        type="text"
                        name="address"
                        id="address"
                        defaultValue={user!.address}
                      ></Input>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 justify-end">
                  <Button variant={"outline"}>Cancel</Button>

                  <Button>Submit</Button>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-card shadow-sm overflow-hidden rounded-lg border border-border mb-10">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-foreground">
                Password
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Update your password.
              </p>
            </div>
            <div className="border-t border-border px-4 py-5 sm:p-6">
              <form
                className="space-y-6"
                action="/api/profile/password"
                method="POST"
              >
                <div>
                  <Label>Current Password</Label>
                  <div className="mt-1">
                    <Input
                      id="current_password"
                      name="current_password"
                      type="password"
                    ></Input>
                  </div>
                </div>

                <div>
                  <Label>New Password</Label>
                  <div className="mt-1">
                    <Input
                      id="new_password"
                      name="new_password"
                      type="password"
                    ></Input>
                  </div>
                </div>

                <div>
                  <Label>Confirm Password</Label>
                  <div className="mt-1">
                    <Input
                      id="new_password_confirmation"
                      name="new_password_confirmation"
                      type="password"
                    ></Input>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
