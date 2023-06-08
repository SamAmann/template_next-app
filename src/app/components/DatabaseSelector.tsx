/** @format */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { usePathname } from "next/navigation";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/react-hook-form/form";

const FormSchema = z.object({
    dbNames: z.string().nonempty(),
});

export function DatabaseSelector({ dbNames }: { dbNames: string[] }) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });
    // the selector navigate the user to the selected database.
    // DOES NOT WORK AT THE MOMENT
    async function onSubmit(values: z.infer<typeof FormSchema>) {
        try {
            // navigate to the selected database
            await usePathname(`/databases/${values.dbNames}`);
        } catch (error) {
            toast({
                title: "Error",
                description: error.message,
                variant: "danger",
            });
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex space-y-6"
            >
                <FormField
                    control={form.control}
                    name="dbNames"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Here are the different databases accessible:
                            </FormLabel>
                            <Select
                                onValueChange={(value) => {
                                    field.onChange(value);
                                    form.handleSubmit(onSubmit)();
                                }}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a database" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {dbNames.map((dbName) => (
                                        <SelectItem key={dbName} value={dbName}>
                                            {dbName}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormDescription>
                                Select a database to display its collections.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
