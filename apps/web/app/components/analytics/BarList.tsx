import React from "react";
import Bar from "./Bar";

type BarListProps<T> = {
    data: T[];
    nameKey: keyof T;
    countKey: keyof T;
    maxCount: number;
};
export function BarList<T>({
    data,
    nameKey,
    countKey,
    maxCount,
}: BarListProps<T>) {
    return (
        <ul className="flex flex-col gap-2">
            {data.map((item, index) => {
                const name = item[nameKey] as unknown as string;
                const count = item[countKey] as unknown as number;

                return (
                    <li key={index}>
                        <Bar name={name} clicks={count} maxCount={maxCount} group={nameKey as string} />
                    </li>
                );
            })}
        </ul>
    );
}