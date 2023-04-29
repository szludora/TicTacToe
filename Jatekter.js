import Elem from "./Elem.js";

class Jatekter {
    #lepes;
    #lista = []
    constructor() {
        this.nyert = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // vizszintes
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]]
        this.#lepes = 0;
        this.#lista = ["", "", "", "", "", "", "", "", ""]
        let art = $("article")
        $("section").html("")
        art.html("")
        

        for (let i = 0; i < 9; i++) {
            const elem = new Elem(art, i);
        }

        $(window).on("elemKatt", (event) => {
            let aktElem = event.detail
            if (this.#lepes % 2 == 0) {
                aktElem.setElem(`X`)
                this.#lista[aktElem.getIndex()] = "X"

            } else {
                aktElem.setElem(`O`)
                this.#lista[aktElem.getIndex()] = "O"
            }
            this.#lepes++;
            this.ellenoriz();
        }

        )
    }

    ellenoriz() {
        for (const nyeroKombo in this.nyert) {
            let kombo = this.nyert[nyeroKombo];
            if (this.#lista[kombo[0]] != "" && this.#lista[kombo[0]] == this.#lista[kombo[1]] && this.#lista[kombo[0]] == this.#lista[kombo[2]]) {
                $("article div").off("click")
                if(this.#lepes%2==0){
                    $("section").prepend(`'O' játékos nyert`)
                    $("button").html("Új játék")                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                }else{                                 
                    $("section").prepend(`'X' játékos nyert`)
                    $("button").html("Új játék")


                } 
            }
        }
    }
}

// ellenoriz() {
//     if(this.#lista[0] != "" && this.#lista[0]== this.#lista[1] && this.#lista[1] == this.#lista[2]){
//         console.log("nyert")
//     }
//     else if(this.#lista[3] != "" && this.#lista[3] == this.#lista[4] && this.#lista[4] == this.#lista[5] ){
//         console.log("nyert")
//     }
//     else if(this.#lista[6] != "" && this.#lista[6] == this.#lista[7] && this.#lista[7] == this.#lista[8] ){
//         console.log("nyert")
//     }
//     else if(this.#lista[0] != "" && this.#lista[0] == this.#lista[3] && this.#lista[3] == this.#lista[6] ){
//         console.log("nyert")
//     }
//     else if(this.#lista[1] != "" && this.#lista[1] == this.#lista[4] && this.#lista[4] == this.#lista[7] ){
//         console.log("nyert")
//     }
//     else if(this.#lista[2] != "" && this.#lista[2] == this.#lista[5] && this.#lista[5] == this.#lista[8] ){
//         console.log("nyert")
//     }
//     else if(this.#lista[0] != "" && this.#lista[0] == this.#lista[4] && this.#lista[4] == this.#lista[8] ){
//         console.log("nyert")
//     }
//     else if(this.#lista[2] != "" && this.#lista[2] == this.#lista[4] && this.#lista[4] == this.#lista[6] ){
//         console.log("nyert")
//     }

// }


export default Jatekter;