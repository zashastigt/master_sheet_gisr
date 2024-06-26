import CharacterBox from '../Universal/characterBox/characterBox.jsx'
import WeaponBox from '../Universal/weaponBox/weaponBox.jsx'
import { useState, useEffect } from 'react'

function GetFilterButton(listShown, filter, {setFilter}, key, label, url){
    const [cbChecked, setChecked] = useState(false)
    const [opaque, setOpaque] = useState('')
    const handleChange = (event) => {
        setChecked(event.target.checked)
        if (event.target.checked) {
            setFilter([...filter, label])
            setOpaque('opaque')
        }
        else {
            setFilter(filter.filter(item => !item.includes(label)))
            setOpaque('')
        }
      }

      useEffect(() => {
        setChecked(false)
        setFilter([])
        setOpaque('')
      }, [listShown])
      
    return (
        <label key={key}>
            <input type="checkbox" value={key} onChange={handleChange} checked={cbChecked} />
            <img alt={label} className={`element ${opaque}`} src={url} />
            <span>{label}</span>
        </label>
    )
}

export function Filtering(types, game, searchValue, filter, boxType, setStateObject) {
    if (boxType === 'Character') {
        return FilterCheckboxes(types, filter).filter(filter => filter.name.toLowerCase().includes(searchValue.toLowerCase())).map(character => {
            return <CharacterBox key={character.id} gameCharacter={character} game={game} characterList={types} setCharacterList={setStateObject} />
        })
    }
    else if (boxType === 'Weapon') {
        return FilterCheckboxes(types, filter).filter(filter => filter.name.toLowerCase().includes(searchValue.toLowerCase())).map(weapon => {
            return <WeaponBox key={weapon.name} gameWeapon={weapon} game={game} weaponList={types} setWeaponList={setStateObject} />
        })
    }
    
}

function FilterCheckboxes(types, filter) {
    if (filter.length !== 0 ) {
        const element = types.filter(fil => fil.types.combatType !== undefined && filter.some(f => fil.types.combatType.Element.toLowerCase().includes(f.toLowerCase())))
        const group = types.filter(fil => fil.types.pathType !== undefined && filter.some(f => fil.types.pathType.Group.toLowerCase().includes(f.toLowerCase())))

        if (element.length !== 0 && group.length !== 0) return element.filter(fil => group.some(f => fil.name.includes(f.name)))
        else if (element.length !== 0 ) return element
        else if (group.length !== 0) return group
    }

    return types
}

export default function Filters({isMobile, filterLHidden, filterRHidden, filter, setFilter, listShown, element, elementImgs, elementExt, group, groupImgs, groupExt}) {
    return (
        <div className="filters">
            <ul className={`elements ${listShown ? '' : 'elementsHidden'}`} style={filterLHidden || !isMobile ? {left: "0"} : {left: "-110px"}}>
                {Object.keys(element).map((k)=>GetFilterButton(
                    listShown,
                    filter,
                    setFilter[k]={setFilter},
                    k, element[k].label,
                    new URL(`../assets/${elementImgs}/${element[k].urlKey}.${elementExt}`,import.meta.url).href
                ))}
            </ul>
            <ul className={"weapons"} style={filterRHidden || !isMobile ? {right: "0"} : {right: "-110px"}}>
                {Object.keys(group).map((k)=>GetFilterButton(
                    listShown,
                    filter,
                    setFilter[k]={setFilter},
                    k, group[k].label,
                    new URL(`../assets/${groupImgs}/${group[k].urlKey}.${groupExt}`, import.meta.url).href
                ))}
            </ul>
        </div>
    )
}