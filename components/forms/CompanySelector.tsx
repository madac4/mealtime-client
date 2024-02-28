import { ICompaniesSelect, ICompany } from '@/@types/custom';
import { useGetCompaniesQuery } from '@/store/company/companyApi';
import React, { useEffect } from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../ui/command';
import { useToast } from '@/hooks/useToast';
import { Skeleton } from '../ui/skeleton';

export default function CompanySelector({ form }: { form: any }) {
    const { data } = useGetCompaniesQuery({}) as ICompaniesSelect;

    return (
        <Loading>
            <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                    <FormItem className="flex flex-col justify-end col-span-2">
                        <FormLabel>Compania</FormLabel>
                        <Popover>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        className={cn(
                                            'justify-between py-6',
                                            !field.value && 'text-muted-foreground',
                                        )}>
                                        {field.value
                                            ? data.companies.find(
                                                  (company) => company.id === field.value,
                                              )?.name
                                            : 'Selectează compania'}
                                        <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>

                            <PopoverContent className="p-0">
                                <Command>
                                    <CommandInput placeholder="Caută compania..." />
                                    <CommandEmpty>Nu s-a găsit.</CommandEmpty>
                                    <CommandGroup>
                                        {data.companies.length > 0 &&
                                            data.companies.map((company) => (
                                                <CommandItem
                                                    value={company.id}
                                                    key={company.id}
                                                    onSelect={() => {
                                                        form.setValue('company', company.id);
                                                        form.setValue('companyName', company.name);
                                                    }}>
                                                    <Check
                                                        className={cn(
                                                            'mr-2 h-4 w-4',
                                                            company.id === field.value
                                                                ? 'opacity-100'
                                                                : 'opacity-0',
                                                        )}
                                                    />
                                                    {company.name}
                                                </CommandItem>
                                            ))}
                                    </CommandGroup>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </Loading>
    );
}

const Loading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isLoading, error } = useGetCompaniesQuery({}) as ICompaniesSelect;

    useEffect(() => {
        useToast({ error });
    }, [error]);

    return (
        <>
            {isLoading || error ? (
                <>
                    <Skeleton className="w-28 h-3 -mb-1 rounded-lg col-span-2" />
                    <Skeleton className="w-full h-12 rounded-lg col-span-2" />
                </>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
