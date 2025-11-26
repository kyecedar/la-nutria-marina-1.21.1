const serverLink = `mc.seaott.com`;

/**
 * Copies server link to clipboard.
 * @param {HTMLButtonElement} elem 
 */
const copyServerLink = (elem) => {
    navigator.clipboard.writeText(serverLink);
    /** @type {HTMLSpanElement} */
    let parent = elem.parentElement;

    /**
     * 
     * @param {HTMLSpanElement} parent 
    */
   let removeCopy = () => { // https://stackoverflow.com/a/67996063
       parent.removeEventListener('animationend', removeCopy);
       parent.classList.remove("coppied");
    };
    
    parent.addEventListener('animationend', removeCopy);
    parent.classList.add("coppied");
};