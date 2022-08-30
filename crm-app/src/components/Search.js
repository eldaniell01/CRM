import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Alert, CheckSuccessful, Groupinputs, SearchInput, Subgroup, TitleLittle } from '../style/styledElements'
import { DataContext } from './ThemeContext';

export const SearchCliente = (props) => {
    const {stateSearch, setSearch} = React.useContext(DataContext);
    const onSearch =(event)=>{
        console.log(event.target.value);
        setSearch(event.target.value);
    }
    
    return (
        <Subgroup>
            <TitleLittle htmlFor={props.id}>{props.Title}</TitleLittle>
            <Groupinputs>
                <SearchInput
                    type={props.type}
                    placeholder={props.placeholder}
                    id={props.id}
                    value={stateSearch}
                    onChange={onSearch}
                />
                <CheckSuccessful
                    icon={props.icon}
                />
            </Groupinputs>
        </Subgroup>
    )
}
