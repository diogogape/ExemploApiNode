class SomaService {

    constructor() {
       
      }

    soma( valorA , valorB){
        if (!isNaN(valorA) && !isNaN(valorB)){
            return valorA + valorB;
        }
        else{
            throw new Error("entrada inválida");
        }
    }

    async getNumber(){
        await this.resolveAfter2Seconds();
        return  Math.random();
    }

    resolveAfter2Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 2000);
        });
      }
}

module.exports = new SomaService();