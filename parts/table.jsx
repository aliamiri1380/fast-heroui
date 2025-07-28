"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/table";

export default function App({ header, body, headerProps, columnProps, bodyProps, rowProps, cellProps, ...props}) {
    console.log(header);
    
    return (
        <Table {...props}>
            <TableHeader {...headerProps}>
                {
                    header?.map((r,j) => <TableColumn key={j} {...columnProps}>{r}</TableColumn>)
                }
            </TableHeader>
            <TableBody {...bodyProps}>
                {
                    (body ?? []).map((r,j) => <TableRow key={j} {...rowProps}>
                        {
                            r.map(r2 => <TableCell {...cellProps}>{r2}</TableCell>)
                        }
                    </TableRow>)
                }
            </TableBody>
        </Table>
    );
}
