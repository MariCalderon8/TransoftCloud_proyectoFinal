class Viaje {
    constructor(fecha, origen, destino, cliente, valorTotal, valorPagar, conductor, placa, usuarioCreador, producto, cantidad, horaCargue, horaDescargue, idviaje = 0){
        this.idviaje = idviaje;
        this.fecha = fecha;
        this.origen = origen;
        this.destino = destino;
        this.cliente = cliente;
        this.valorTotal = valorTotal;
        this.valorPagar = valorPagar;
        this.conductor = conductor;
        this.placa = placa;
        this.usuarioCreador = usuarioCreador;
        this.producto = producto;
        this.cantidad  = cantidad;
        this.horaCargue = horaCargue;
        this.horaDescargue = horaDescargue;
    }
}

export default Viaje;