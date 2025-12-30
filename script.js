class Palette {
    constructor() {
        this.hueVal = 280;
        this.accentHueVal = 300;
        this.saturationVal = ["15%", "15%"];
        this.primaryLightnessVals = ["100%", "15%"];
        this.secondaryLightnessVals = ["85%", "30%"];
        this.colorUnitVal = "oklch";
    }

    update() {
        document.documentElement.style.setProperty("color-scheme", "light dark");
        document.documentElement.style.setProperty("--hue", this.hue.toString());
        document.documentElement.style.setProperty("--accent-hue", this.accentHueVal.toString());
        document.documentElement.style.setProperty("--saturation", this.saturationVal[0].toString());
        document.documentElement.style.setProperty("--light", this.primaryLightnessVals[0].toString());
        document.documentElement.style.setProperty("--dark", this.primaryLightnessVals[1].toString());
        document.documentElement.style.setProperty("--light-element", this.secondaryLightnessVals[0].toString());
        document.documentElement.style.setProperty("--dark-element", this.secondaryLightnessVals[1].toString());
    }

    /**
     * @returns {number}
     */
    get hue() {
        return this.hueVal;
    }
    
    /**
     * @param {number} hue
     */
    set hue(hue) {
        this.hueVal = hue;
        this.update();
    }

    /**
     * @returns {number}
     */
    get accentHue() {
        return this.accentHueVal;
    }

    /**
     * @param {number} hue
     */
    set accentHue(hue) {
        this.accentHueVal = hue;
        this.update();
    }

    /**
     * @returns {string[]}
     */
    get saturation() {
        return this.saturationVal;
    }

    set saturation(saturation) {
        this.saturationVal = saturation;
        this.update();
    }
}