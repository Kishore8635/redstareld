"use client";

import { useRouter } from "next/navigation"; // Correct for Next.js App Router
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function LoginForm() {
  const router = useRouter();

  // Handle the login action
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    router.push("/dashboard"); // Navigate to dashboard
  };

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login to your Account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              {/* Email Input */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full">
                Login
              </Button>

              </div>
              {/* <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/" className="underline underline-offset-4">
                Sign up
              </a>
            </div> */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
