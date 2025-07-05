function depositarVALOR (valor){
    return new Promise((resolve, reject) => {
        if (valor > 0){
            resolve(`Depósito de R$${valor} realizado com sucesso!`)
        } else {
            reject('Você não tem dinheiro suficiente para depositar');
        }
    })
}

async function fazerDeposito() {
    try{
        await Promise.resolve(
        depositarVALOR(9)
.       then((mensagem) => {
        console.log (mensagem)
        })
.       catch((e) => {
        console.log (e)
        })
    )
    } catch (er){
        console.log (er)
    } finally{
        console.log ("depositou")
    }
}

fazerDeposito()