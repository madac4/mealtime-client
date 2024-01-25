import { ICompany } from '@/@types/custom';
import { useGetCompaniesQuery } from '@/store/company/companyApi';
import React, { useEffect } from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../ui/command';

export default function CompanySelector({ form }: { form: any }) {
    const [companies, setCompanies] = React.useState<ICompany[]>([]);
    const { data, error, isLoading, isSuccess } = useGetCompaniesQuery({}) as {
        data: {
            companies: ICompany[];
        };
        error: any;
        isLoading: boolean;
        isSuccess: boolean;
    };

    useEffect(() => {
        if (isSuccess) {
            setCompanies(data.companies);
        }
    }, [isSuccess]);

    return (
        <FormField
            control={form.control}
            name="companyId"
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
                                        ? companies.find((company) => company._id === field.value)
                                              ?.name
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
                                    {companies.length > 0 &&
                                        companies.map((company) => (
                                            <CommandItem
                                                value={company._id}
                                                key={company._id}
                                                onSelect={() => {
                                                    form.setValue('companyId', company._id);
                                                }}>
                                                <Check
                                                    className={cn(
                                                        'mr-2 h-4 w-4',
                                                        company._id === field.value
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
    );
}
