class SimplePallete {
    /**
     * @type {number | Array<number>}
     */
    #hues;
    #sat;
    #bLight;
    #eLight;
    #colorUnit;

    constructor() {
        this.#hues = 270;
        this.#sat = 0.1;
        this.#bLight = [1, 0.2];
        this.#eLight = [0.9, 0.3];
        this.#colorUnit = "oklch";
        this.update();
    }

    update() {
        document.documentElement.style.setProperty("color-scheme", "light dark");
        if (typeof this.#hues === "object") {
            document.documentElement.style.setProperty("--hue", this.#hues[0].toString());
            document.documentElement.style.setProperty("--accent-hue", this.#hues[1].toString());
        } else {
            document.documentElement.style.setProperty("--hue", this.#hues.toString());
            document.documentElement.style.setProperty("--accent-hue", (this.#hues + 30).toString());
        }
        document.documentElement.style.setProperty("--saturation", this.toPercentage(this.#sat));
        document.documentElement.style.setProperty("--light", this.toPercentage(this.#bLight[0]));
        document.documentElement.style.setProperty("--dark", this.toPercentage(this.#bLight[1]));
        document.documentElement.style.setProperty("--light-element", this.toPercentage(this.#eLight[0]));
        document.documentElement.style.setProperty("--dark-element", this.toPercentage(this.#eLight[1]));
    }

    /**
     * @returns {number | Array<number>}
     */
    get hues() {
        return this.#hues;
    }

    /**
     * @param {number | Array<number>} hues
     */
    set hues(hues) {
        this.#hues = hues;
        this.update();
    }

    /**
     * @returns {number}
     */
    get sat() {
        return this.#sat;
    }

    /**
     * @param {number} sat
     */
    set sat(sat) {
        this.#sat = sat;
        this.update();
    }

    /**
     * @returns {number[]}
     */
    get bLight() {
        return this.#bLight;
    }

    /**
     * @param {number[]} bLight
     */
    set bLight(bLight) {
        this.#bLight = bLight;
        this.update();
    }

    /**
     * @returns {number[]}
     */
    get eLight() {
        return this.#eLight;
    }

    /**
     * @param {number[]} eLight
     */
    set eLight(eLight) {
        this.#eLight = eLight;
        this.update();
    }

    /**
     * @param {string} percentage 
     * @returns {number}
     */
    toDecimal(percentage) {
        if (percentage.charAt(-1) !== "%" || !percentage.substring(0, -1).match(/[0-9]/g)) {
            throw "Value is not a percentage.";
        }

        return parseInt(percentage.substring(0, -1)) / 100;
    }

    /**
     * @param {number} decimal 
     * @returns {string}
     */
    toPercentage(decimal) {
        if (isNaN(decimal)) {
            throw "Value is not a decimal.";
        }

        return decimal * 100 + "%";
    }
}

class SuperPallete {
    #styles;

    /**
     * @param {*} styles 
     */
    constructor(styles) {
        this.#styles = styles;
    }

    update() {
        document.documentElement.style.setProperty("color-scheme", "light dark");
    }
}