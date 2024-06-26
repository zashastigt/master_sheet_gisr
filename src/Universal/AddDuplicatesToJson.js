import postData from "../data/postData.js";

function AddDuplicatesToJson(data, sheetData, pityPlayers) {
    let newData = data.map(key => {
        if (sheetData.Characters[key.name] !== undefined && key.name == sheetData.Characters[key.name].Name) return { ...key, CE: sheetData.Characters[key.name].CE }
        else if (key.name.includes('Trailblazer')) return { ...key, CE: sheetData.Characters[`${key.name} ${key.types.combatType.Element}`].CE }
        else if (sheetData.Weapons[key.name] !== undefined && key.name == sheetData.Weapons[key.name].Name) return { ...key, CE: sheetData.Weapons[key.name].CE }
        else if (key.name.includes('Traveler'))  return { ...key,  CE: sheetData.Characters[`${key.name} ${key.types.combatType.Element}`].CE }

        let postItem = {
            Level: '',
            Person: 'Wilco',
            Name: key.name,
            Game: key.game,
            Group: key.kind,
            Rank: key.rank,
            Path: key.types.pathType.Group
        }

        if (key.kind == 'Character') {
            postItem['Element'] = key.types.combatType.Element
        }
        postData(postItem)

        const newCE = {}
        Object.values(pityPlayers).map((name) => newCE[name.Name] = "")

        return { ...key, CE: newCE }
    })

    newData.sort((a, b) => {
        if (a.rank !== b.rank) return (a.rank > b.rank) ? -1 : 1;
        if (a.types.combatType !== undefined && a.types.combatType.Element !== b.types.combatType.Element) return (a.types.combatType.Element < b.types.combatType.Element) ? -1 : 1;
        else if (a.types.pathType !== undefined && a.types.pathType.Path !== b.types.pathType.Path) return (a.types.pathType.Path < b.types.pathType.Path) ? -1 : 1;
        return (a.name < b.name) ? -1 : 1;
    })

    return newData
}

export { AddDuplicatesToJson }