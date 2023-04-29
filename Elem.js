class Elem {
    #index;
    constructor(szuloElem, index) {
        this.#index = index;
        szuloElem.append(`<div class="elem"><p></p></div>`)
        this.divElem = $("article div:last-child")
        this.pElem = $("article div:last-child p")

        this.divElem.on("click", () => {
            this.setElem("X")
            this.kattintasTrigger()
            this.divElem.off("click")
        })
    }

    getIndex() {
        return this.#index
    }

    setElem(adat) {
        this.pElem.html(adat)
    }

    kattintasTrigger() {
        const esemeny = new CustomEvent("elemKatt", { detail: this })
        window.dispatchEvent(esemeny)
        //létrehozza a saját eseményünket : elemKatt

    }
}


export default Elem