class Palette {
    #hue = 280;
    #accentHue = 300;
    #saturation = 0.1;
    #primaryLightness = [1, 0.2];
    #secondaryLightness = [0.9, 0.3];
    #colorUnit = "oklch";

    update() {
        document.documentElement.style.setProperty("color-scheme", "light dark");
        document.documentElement.style.setProperty("--hue", this.#hue.toString());
        document.documentElement.style.setProperty("--accent-hue", this.#accentHue.toString());
        document.documentElement.style.setProperty("--saturation", this.toPercentage(this.#saturation));
        document.documentElement.style.setProperty("--light", this.toPercentage(this.#primaryLightness[0]));
        document.documentElement.style.setProperty("--dark", this.toPercentage(this.primaryLightness[1]));
        document.documentElement.style.setProperty("--light-element", this.toPercentage(this.#secondaryLightness[0]));
        document.documentElement.style.setProperty("--dark-element", this.toPercentage(this.#secondaryLightness[1]));
    }

    /**
     * @returns {number}
     */
    get hue() {
        return this.#hue;
    }

    /**
     * @param {number} hue
     */
    set hue(hue) {
        this.#hue = hue;
        this.update();
    }

    /**
     * @returns {number}
     */
    get accentHue() {
        return this.#accentHue;
    }

    /**
     * @param {number} hue
     */
    set accentHue(hue) {
        this.#accentHue = hue;
        this.update();
    }

    /**
     * @returns {number}
     */
    get saturation() {
        return this.#saturation;
    }

    /**
     * @param {number} saturation
     */
    set saturation(saturation) {
        this.#saturation = saturation;
        this.update();
    }

    /**
     * @returns {number[]}
     */
    get primaryLightness() {
        return this.#primaryLightness;
    }

    /**
     * @param {number[]} primaryLightness
     */
    set primaryLightness(primaryLightness) {
        this.#primaryLightness = primaryLightness;
        this.update();
    }

    /**
     * @returns {number[]}
     */
    get secondaryLightness() {
        return this.#secondaryLightness;
    }

    /**
     * @param {number[]} secondaryLightness
     */
    set secondaryLightness(secondaryLightness) {
        this.#secondaryLightness = secondaryLightness;
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