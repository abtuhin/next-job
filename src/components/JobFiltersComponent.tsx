import { Bereich, Erfahrungslevel, Stadt } from '@/constants/filter'
import useGetJobs from '@/hooks/useGetJobs';
import SelectFilter from '@/styled/SelectFilter'
import { ApiResponse, Job, JobLevel, JobLocation } from '@/types'
import React from 'react'

export interface Filter {
    key: string;
    value: string;
}
interface JobFiltersComponentProps {
    onChangeFilters: (data: Filter) => void;
}

export default function JobFiltersComponent({ onChangeFilters }: JobFiltersComponentProps) {
    const [_, locations, levels] = useGetJobs();
    return (
        <>
            <SelectFilter
                onChange={e => onChangeFilters({key: Bereich, value: e.target.value})}
            >
            <option value="" hidden>
                Bereich
            </option>
            {locations.map((l: ApiResponse) => <option key={l.sys.id} value={l.fields.name}>{l.fields.name}</option>)}
            </SelectFilter>

            <SelectFilter
                onChange={e => onChangeFilters({key: Stadt, value: e.target.value})}
            >
            <option value="" hidden>
                Stadt
            </option>
            {locations.map((l: ApiResponse) => <option key={l.sys.id} value={l.fields.city}>{l.fields.city}</option>)}
            
            </SelectFilter>

            <SelectFilter
                onChange={e => onChangeFilters({key: Erfahrungslevel, value: e.target.value})}
            >
            <option value="" hidden>
                Erfahrungslevel
            </option>
            {levels.map((l: ApiResponse) => <option key={l.sys.id} value={l.fields.title}>{l.fields.title}</option>)}
            
            </SelectFilter>
        </>
    )
}
