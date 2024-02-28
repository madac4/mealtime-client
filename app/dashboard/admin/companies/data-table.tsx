'use client';

import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { TableProps } from '@/@types/custom';
import { AddCompanyModal } from '@/components/modals/AddCompanyModal';

export function DataTable<TData, TValue>({ columns, data }: TableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [newData, setNewData] = useState(() => [...data]);

    const table = useReactTable({
        data: newData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
        meta: {
            addRow: (values: any) => {
                const newRow = values;
                const setFunc = (old: any) => [newRow, ...old];
                setNewData(setFunc);
            },
            removeRow: (id: number) => {
                const setFilterFunc = (old: any) =>
                    old.filter((_row: any, index: number) => index !== id);
                setNewData(setFilterFunc);
            },
        },
    });

    return (
        <>
            <div className="flex items-center py-4 gap-4">
                <Input
                    placeholder="Caută după denumire"
                    value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
                    onChange={(event) =>
                        table.getColumn('name')?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm mr-auto"
                />

                <AddCompanyModal table={table} />
            </div>
            <div className="rounded-md border">
                <Table className="min-w-[760px] whitespace-nowrap">
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef.header,
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && 'selected'}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    Nu sunt companii <span className="text-lg">🏢</span>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <div className="flex items-center justify-end space-x-2 p-4 border-t-[1px]">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}>
                        Înapoi
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}>
                        Îniante
                    </Button>
                </div>
            </div>
        </>
    );
}
