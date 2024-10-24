import { helloWorld } from "./hello";
import { RandomNumbers,pi, phi, returnPI } from "./math";

function calcularArea() {
    const obj = {width: 10, height: 30};

    const area = obj.width * obj.height;

    return area;
}

function usuario() {
    const usuario = {
        nome: "Matheus",
        idade: 17
    }
}

function calculo() {
    return Math.random() < 5;
}

function validacao(){
    const valor = Math.random() < 0.5 ? 'a' : 'b';

    if (valor !== 'a') {

    }

    else if (valor === 'a') {

    }
}

function exibirMensagem(pessoa: string, data: string): string {
    
    // Maneira tradicional
    //console.log('Olá' + pessoa + ', hoje é ' + data);
    
    // Maneira simplificada
    console.log(`Olá ${pessoa}, hoje é ${data}`);

    return 'teste';
}

exibirMensagem('Matheus', '05/09/2024');

let mensagem: string = 'hello world';

let mensagem2: 'hello world';

let number1: number = 3;

let number2 = 4;

let obj:any = {x:0};

function olaMundo(mensagem:string) {

    return `Olá mundo ${mensagem}`;
}

function exibirCoordenadas(pt:{x:number, y:number}): string {

    return `${pt.x} ${pt.y}`;
}

exibirCoordenadas({x:4, y:6});

function exibirNome(obj: {nome:string, sobrenome?:string}):string {

    if(obj.sobrenome === undefined) {
        mensagem = `Seu nome é ${obj.nome}`;
    }

    else(obj.sobrenome !== undefined) {
        mensagem = `Seu nome é ${obj.nome} ${obj.sobrenome}`
    }

    return mensagem;
}

function exibirIds(id: number|string) {

    let mensagem = '';

    if (typeof id === 'number') {
        mensagem = `O seu id numérico é ${id.toString()}`
    }
    else {
        mensagem = id.toUpperCase();
    }

    return mensagem;
}

exibirIds(3);

exibirIds('345');

type Ponto = {
    x: number;
    y: number
}

function imprimirPonto(p: Ponto){

    return `O seu ponto é ${p.x} ${p.y}`;
}

imprimirPonto({x:3, y:5});

function imprimirTexto(texto:string, alinhamento: 'left' | 'right' | 'center') {

}

imprimirTexto('meu texto', 'right');

var teste = null;

console.log(teste);

var teste2;

console.log(teste2);

function vivendoPerigosamente(x?: number | null) {
    console.log(x?.toFixed());
}

vivendoPerigosamente();

function fazerAlgo(lista: Array<string>) {

}

function fazerAlgoTambem(lista: string[]) {

}

fazerAlgo(new Array('hello', 'world'));

fazerAlgoTambem(['hello', 'world']);

class Point {
    x: number = 0;
    y: number = 0;
}

let p = new Point();
p.x = 4;
p.y = 4;

console.log(`${p.x} ${p.y}`);

class BoasVindas {
    mensagem: string;

    constructor() {
        this.mensagem = 'Bem-vindo!';
    }
}

let m = new BoasVindas();

console.log(m.mensagem);

class Saudacoes {
    readonly mensagem: string;

    constructor() {
        this.mensagem = 'Muito bem-vindo!';
    }

    dizerOla(){
        console.log(this.mensagem)
    }
}

let s = new Saudacoes();

class C {
    private _length = 0;

    sum:number = 0;

    get length(): number {
        
        if (this.length > 0)
            return 100;
        else
            return this._length;
    }
    
    set length(value:number) {
        
        if (value > 10)
            this._length = value;
    }
}

let c = new C();

c.length = 100;

console.log(c.length);

interface Pingavel {
    ping(): void;
    
    value: number;

}

class Sonar implements Pingavel {
    ping(): void {
        console.log('ping');
    }
    
    value: number = 3;
}

class Ball implements Pingavel {
    ping(): void {
        
    }

    value: number = 4;

}

let sonar = new Sonar();

sonar.ping();

class Animal {
    public andar() { //se estivesse "protected" ao invés de public, somente as classes que herdam poderiam acessar a função andar
        console.log('animal andando');
    }
}

class Cachorro extends Animal {
    public latir() {
        console.log('au au');
    }
}

let golden = new Cachorro();

golden.andar;

golden.latir; //exclusivo da classe Cachorro

class Gato extends Animal {
    public miar() {
        console.log('miau')
    }
}

let persa = new Gato();

persa.andar;

persa.miar; //exclusivo da classe Gato

helloWorld();

let r = new RandomNumbers();

console.log(pi);