class Viaje {
    constructor(idviaje = 0, origen, destino, cliente, valorTotal, valorPagar, conductor, placa, usuarioCreador){
        this.idviaje = idviaje;
        this.origen = origen;
        this.destino = destino;
        this.cliente = cliente;
        this.valorTotal = valorTotal;
        this.valorPagar = valorPagar;
        this.conductor = conductor;
        this.placa = placa;
        this.usuarioCreador = usuarioCreador;
    }
}

export default Viaje;