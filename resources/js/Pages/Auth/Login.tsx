import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import InputError from "@/Components/InputError";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        input_type: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="w-full lg:grid lg:min-h-[700px] lg:grid-cols-2 xl:min-h-[700px]">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-balance text-muted-foreground">
                                Enter your email below to login to your account
                            </p>
                        </div>
                        <form className="grid gap-4" onSubmit={submit}>
                            <div className="grid gap-2">
                                <Label htmlFor="input_type">Username</Label>
                                <Input
                                    id="input_type"
                                    type="text"
                                    placeholder="Masukkan username kamu..."
                                    required
                                    onChange={(e) =>
                                        setData("input_type", e.target.value)
                                    }
                                />

                                <InputError message={errors.username} />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        tabIndex={-1}
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <InputError message={errors.password} />
                            </div>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing && (
                                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                {processing ? "Please wait" : "Login"}
                            </Button>
                        </form>
                    </div>
                </div>
                <div className="hidden bg-muted lg:block">
                    <img
                        src="/unitama.jpg"
                        alt="Image"
                        width={700}
                        className="object-cover"
                    />
                </div>
            </div>
        </GuestLayout>
    );
}
