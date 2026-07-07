// Mesas disponibles actualmente

const mesasDisponibles = 5;

// VERIFICAR DISPONIBILIDAD DE MESAS

function verificarDisponibilidad(mesasSolicitadas){

    return new Promise((resolve, reject)=>{

        console.log("Verificando disponibilidad de mesas...");

        setTimeout(()=>{

            if(mesasSolicitadas <= mesasDisponibles){
                resolve(
                    "Mesas disponibles"
                );

            }else{
                reject(
                    "No hay suficientes mesas disponibles"
                );
            }
        },1000);
    });
}

// SIMULAR ENVÍO DE CORREO

function enviarConfirmacionReserva(nombreCliente){

    return new Promise((resolve,reject)=>{

        console.log(
            "Enviando correo de confirmación..."
        );

        setTimeout(()=>{
            const enviado =
            Math.random() > 0.3;

            if(enviado){
                resolve(
                    `Correo enviado correctamente a ${nombreCliente}`
                );

            }else{
                reject(
                    "Error al enviar el correo de confirmación"
                );
            }
        },1500);
    });
}

// HACER RESERVA

async function hacerReserva(nombreCliente, mesasSolicitadas){
    try{

        const disponibilidad =
        await verificarDisponibilidad(
            mesasSolicitadas
        );

        console.log(disponibilidad);

        const confirmacion =
        await enviarConfirmacionReserva(
            nombreCliente
        );

        console.log(confirmacion);

        console.log(
            `
            Reserva confirmada para:
            ${nombreCliente}

            Mesas:
            ${mesasSolicitadas}
            `
        );
    }
    catch(error){
        console.error(
            "Error en la reserva:",
            error
        );
    }
}

// PRUEBAS

hacerReserva(
    "Carlos",
    3
);

hacerReserva(
    "Ana",
    8
);

hacerReserva(
    "María",
    2
);