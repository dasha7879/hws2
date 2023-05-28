import React from 'react'

// добавить в проект иконки и импортировать
const downIcon = 'DOWN'
const upIcon = 'UP'
const noneIcon = 'NO'


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            >
            <span   id={id + '-icon-' + sort}>{icon}</span>
{/*         
             <img
               id={id + '-icon-' + sort}
               src={icon}/>  */}
        </span>
    )
}

export default SuperSort
