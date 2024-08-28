//No lo terminé de hacer


const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id:2,
        salario: 2000
    }
]

const getSalario = (id, callback)=>{
    const salario = salarios.find(s => s.id == id)?.salario;

    if(salario){
        callback(null, salario);
    }else{
        callback(`Salario con id ${id} no existe`);
    }
}

getSalario(3, (err, salario)=>{
    if(err){
        return console.log(err);
    }

    console.log(salario);
})