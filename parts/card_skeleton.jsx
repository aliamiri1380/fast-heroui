"use client"

import { Card, Skeleton } from "@heroui/react";

export default ({count=1}) => {
    return (
        <div className="flex flex-row flex-wrap justify-around">
            {[...Array(count)].map(r => <Card className="w-[200px] bg-transparent space-y-5 p-4 shadow-none" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                    </Skeleton>
                </div>
            </Card>)}
        </div>
    );
}