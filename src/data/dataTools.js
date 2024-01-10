import logements from "./_logements.json";

export function dataGalery(){
    let data = [];
    logements.forEach((logement) => { 
        data.push(
            {id: logement.id, title: logement.title, cover: logement.cover});
    })
    return data;

};

export function dataById(id){

    let data = {};
    data = logements.find((logement) =>{
        return logement.id === id
    })

    return data;

};