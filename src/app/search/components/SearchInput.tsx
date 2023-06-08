/** @format */

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchInput() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2 ">
            <Input type="text" placeholder="Search" />
            <Button type="submit" className="gap-2" name="query">
                <Icons.search />
                Search
            </Button>
        </div>
    );
}
