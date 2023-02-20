import { Bereich, Erfahrungslevel, Stadt } from '@/constants/filter'
import SelectFilter from '@/styled/SelectFilter'
import React from 'react'

export default function JobFiltersComponent({ locations, levels, onChangeFilters }: any) {
    return (
        <>
            <SelectFilter
                onChange={e => onChangeFilters({key: Bereich, value: e.target.value})}
            >
            <option value="" hidden>
                Bereich
            </option>
            {locations.map((l: any) => <option key={l.sys.id} value={l.fields.name}>{l.fields.name}</option>)}
            </SelectFilter>

            <SelectFilter
                onChange={e => onChangeFilters({key: Stadt, value: e.target.value})}
            >
            <option value="" hidden>
                Stadt
            </option>
            {locations.map((l: any) => <option key={l.sys.id} value={l.fields.city}>{l.fields.city}</option>)}
            
            </SelectFilter>

            <SelectFilter
                onChange={e => onChangeFilters({key: Erfahrungslevel, value: e.target.value})}
            >
            <option value="" hidden>
                Erfahrungslevel
            </option>
            {levels.map((l: any) => <option key={l.sys.id} value={l.fields.title}>{l.fields.title}</option>)}
            
            </SelectFilter>
        </>
    )
}
