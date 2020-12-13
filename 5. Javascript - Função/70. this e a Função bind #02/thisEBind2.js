function Pessoa() {
    this.idade = 0;

    const self = this;
    setInterval(function(){ //dispara uma função a partir de um intervalo passado
        self.idade++;
        console.log(self.idade);
    }/* .bind(this) */, 1000)
}

new Pessoa;