"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";

type Props = {
    label: string;
    queryKey: string;
    options: string[];
};

export default function DashboardFilter({
    label,
    queryKey,
    options,
}: Props) {
    const router = useRouter();

    const pathname = usePathname();

    const searchParams = useSearchParams();

    const selectedValue =
        searchParams.get(queryKey) || "";

    function handleChange(value: string | null) {
        if (value === null) return;
        const params = new URLSearchParams(
            searchParams.toString()
        );

        if (value === "all") {
            params.delete(queryKey);
        } else {
            params.set(queryKey, value);
        }

        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="min-w-45">
            <Select
                value={selectedValue}
                onValueChange={handleChange}
            >
                <SelectTrigger>
                    <SelectValue
                        placeholder={`All ${label}`}
                    />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="all">
                        All {label}
                    </SelectItem>

                    {options.map((option) => (
                        <SelectItem
                            key={option}
                            value={option}
                        >
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
