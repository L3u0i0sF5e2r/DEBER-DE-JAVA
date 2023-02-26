// ejercicio 1
// class promedio{
//     promediocn(){
//      let num1=10,num2=2,num3=3,num4=9,suma=0,suma2=0;
//         if (num1>num2) {
//             suma=num3+num4;
//         }else{
//             if(num2>num1){
//               suma2=num1+num4;
//             }
//         }
//         console.log(`El numero ${num1} es mayor que el numero ${num2}`);
//         console.log("la suma es:",suma);
//     }

// }    
// let promedio1= new promedio
// promedio1.promediocn()

///ejercio 2
// class ope{
//     operadores(){
//         let num1=8,num2=9;
//         let suma=0,resta=0,multi=0,division=0,residuo=0;
//         let ops="+",oprs="-",opdi="/",opmu="*",opre="%";
//         suma= num1+num2
//         division= num1/num2
//         resta= num1-num2
//         multi= num1*num2
//         residuo= num1%num2
//         console.log(`La suma de los numeros ${num1} ${ops} ${num2} es ${suma}`);
//         console.log(`La resta de los numeros ${num1} ${oprs} ${num2} es ${resta}`);
//         console.log(`La multiplicacion de los numeros ${num1} ${opmu} ${num2} es ${multi}`);
//         console.log(`La division de los numeros ${num1} ${opdi} ${num2} es ${division}`);
//         console.log(`La residuo de los numeros ${num1}${opre}${num2} es ${residuo}`);

//     }
// }
// let op1=new ope ;
// op1.operadores();

// ejercicio 3
// class mayordo{
//     mayornu(){
//         let num1=3,num2=4;
//         if(num1>num2){
//             console.log(`El numero mayor es el ${num1}`)

//         }else{
//             console.log(`El numero mayor es el ${num2}`)
//         }
//     }
// }
// let may1=new mayordo
// may1.mayornu()

///ejercicio 4
// class nombre{
//     nomvar(){
//         let nombre="luis carlos";
//         console.log(nombre)
//     }
// }
// let nombre1=new nombre
// nombre1.nomvar();

///ejercicio 5
// class iva{
//     variva(){
//         let iva=0.12,monto=60.23,motototal=0,preciofil;
//         motototal=iva*monto;
//         preciofil=motototal+monto;
//         console.log(`El valor del monto es ${monto} mas el iva es:${preciofil} `);
//     }
// }
// let iva1=new iva ;
// iva1.variva();

///ejercicio 6
// class cincvn{
//     fucioco(){
//         let nombre="luis",i=1
//         for(;i<=5;i++){
//             console.log(nombre);
//         }
//     }
// }
// let cincvn1=new cincvn;
// cincvn1.fucioco();

///ejercicio 7
// class multi{
//     sintaxis(){
//         let limite=21
// 		let num=3
// 		while (num<=limite){
// 			if (num%3==0) {
// 				console.log(`Los multiplo de 3 son ${num}`)
// 			}
//          num=num+1
//         }	
//     }
// }
// let sintaxis1=new multi;
// sintaxis1.sintaxis();

///ejercicio 8
// class multi{
//     sintaxis(){
//         let limite=3
// 		let num=21
// 		while (num>=limite){
// 			if (num % 3==0) {
// 				console.log(`Los multiplo de 3 son ${num}`)
// 			}
//          num=num-1
//         }	
//     }
// }
// let sintaxis1=new multi;
// sintaxis1.sintaxis();

///ejercicio 9
// class nombr{
//     difer(){

//         let cadena1="Luis";
//         let cadena2="Anna";
//         if (cadena1==cadena2){ 
//             console.log (`Los nombres ${cadena1} y ${cadena2} si son iguales`);

//         }else{
//             console.log(`Los nombres ${cadena1} y ${cadena2} no son iguales`)

//         }
//     }
// }
// let nombre=new nombr
// nombre.difer()

///ejercicio10
// class cara{
//     arreglocaract(){
       
//         let arreglo =["2343423","2323234","12","23234","12","2","12","9","34565"];
//         for(let pos=0;pos<10;pos=pos+1) {
//             if(arreglo[pos].length < 5){
//                 console.log(`pos=${pos} Elemento ${arreglo[pos]}`)
//             }
//         }

//     }
// }
// let caracteres=new cara;
// caracteres.arreglocaract();

///ejercicio 11
// class usoarr{
//     arreglo(){
//         let numeros=[1,4,5,6,3];
//         console.log(numeros);
//     }
// }
// let arg=new usoarr
// arg.arreglo()

///ejercicio 12
// class usoarr{
//     arreglo(){
//         let numeros=[1,4,5,6,10];
//         let longitud= numeros.length,c=0
//         while(c<longitud){
//             if (numeros[c]<10){
//                 console.log(`el numero ${numeros[c]} es menor que 10 `)
//             }else{
//                 console.log(`el numero ${numeros[c]} es mayor o igual que 10 `)
               
//             }
//             c=c+1
//         }
//     }
// }
// let arg=new usoarr
// arg.arreglo()

///ejercicio 13
// class usoarr{
//     arreglo(){
//         let numeros=[1,4,5,6,10];
//         let longitud= numeros.length,c=0,sumapar=0;
//         while(c<longitud){
//             if (numeros[c]%2==0){
//                 console.log(`el numero ${numeros[c]} es par `);
//                 sumapar=sumapar+numeros[c];
//             }else{
//                 console.log(`el numero ${numeros[c]} es impar `);
                
               
//             }
//             c=c+1;
//         }
//          console.log(`la suma de los numeros imapares es ${sumapar}`);
//     }
// }
// let arg=new usoarr
// arg.arreglo();

///ejercicio 14
// class usoarr{
//     arreglo(){
//         let numeros=[1,6,3,4,7,5,8];
//         let longitud=numeros.length
//         let media=(longitud/2).toFixed(0)
//         console.log(numeros,numeros[0],numeros[media-1],numeros[longitud-1]);
//     }
// }
// let arg=new usoarr
// arg.arreglo()

///ejercicio 15
// class vue{
//     pago(){
//         let pago=100,costo=50.96,vuelto;
//         vuelto=pago-costo
//         console.log(`El vuelto es ${vuelto}`)
      

//     }
// }
// let vueltof=new vue
// vueltof.pago();

///ejercicio 16
// class tabla{
//     multiplki(){
//         let num=2,i=1,multiplicacion=1;
//         while(i<=12){
//             multiplicacion=num*i;
           
//             console.log(`la tabla de multiplicacion de ${num} es:`);
//             console.log(`${i}*${num}=${multiplicacion}`);
//             i=i+1

//         }

//     }
// }
// let multi=new tabla
// multi.multiplki();

///ejercicio 17
// class suma{
//     sucesiva(){
//         let nume=3,numer2=10,i,sumasu=0;
        
//         for(i=1;i<=nume;i++){
//             sumasu=sumasu+numer2
//         }
//         console.log(`la suma suseciva de ${nume} veces el numero 10 es: `)
//         console.log(`la suma es ${sumasu}`);
//     }

// }
// let suma1=new suma
// suma1.sucesiva();

///ejercicio 18
// class resta{
//     dsucesiva(){
//         let nume=5,numer2=2,i;
        
//         for(i=1;i<=numer2;i=i+1){
//           nume=nume-numer2;

//         }
//         console.log(`la residuo es ${nume}`);

//         console.log(`el cociente es ${numer2}   `)
//     }

// }
// let resta1=new resta
// resta1.dsucesiva();

///ejercicio 19
// class divi{
//     arr(){
//         let numero=4,c=1,mult=0;
//         mult=numero
//         while(c<numero){
//             mult=mult*c
//             c=c+1;
//         }
//         console.log(`la multplicacion es ${mult}`)
//     }
// }
// let arg=new divi
// arg.arr();

///ejercicio 20
// class resta{
//     dsucesiva(){
//      let nume=4,numerex=3,i=2,multi;
//         multi=nume
//         for(;i<=numerex;i=i+1){
//           multi=multi*nume;

//         }

//         console.log(`el exponente de un numero ${multi}   `)
//     }

// }
// let resta1=new resta
// resta1.dsucesiva();

///ejercicio 21
// class fibo{
//     asum(){
//         let numero=8,c=3,b=0,a=1,su=0;
//         console.log(`${b} ${a}`);
//         while(c<=numero){
//             su=b+a;
//             b=a;
//             a=su;
//             console.log(su);
//            c=c+1;
//         }
        
//     }
// }
// let suma1=new fibo;
// suma1.asum();

///ejercicio 22


///ejercicio 23
// class divi{
//     arr(){
//         let numero=8,c=1;
//         c=1
//         while(c<numero){
//             if (numero%c==0){
//                 console.log(`el numero ${c} es divisible para 8 `);
//             }
//             c=c+1;
//         }
        
//     }
// }
// let arg=new divi
// arg.arr();

///ejercicio24
// class divi{
//     arr(){
//         let numer=6,c,sumap=0;
//         c=1;
//         while(c<numer){
//             if (numer%c==0){
//                 console.log(`el numero ${c} es divisible para 6 `);
//                 sumap=c+sumap
//                 console.log(sumap)
//                 c=c+1
//             }
//         }
//         if(numer==sumap){
//             console.log(`El numero es perfecto`)
            

//         }else{
//             console.log(`El numero no es perfecto`)
//         } 
//     }
// }
// let numeper= new divi
// numeper.arr();

///ejercicio 25 
// class primo {
//     primos(){
//         let num=5 ,c=1,cont=0;
//         for(;c<=5;c=c+1)
//         if(num%c==0){
//             cont=cont+1
//         }    
//         if(cont==2){
//             console.log(`el numero ${num} es divisible para uno y para haci mismo entonces es primo`)

//         }else{
//             console.log(`el njumero${num} no es primo`)
//         }
//     }
// }
// let prim=new primo
// prim.primos()

