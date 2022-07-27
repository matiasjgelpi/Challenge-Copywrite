module.exports = {
  // Función para limpiar una cadena de caracteres extraida de "https://retro.relaxate.com/tutorial-javascript-limpiar-cadena-acentos-tildes-extranos/"

  getCleanedString (cadena) {

    if(cadena === "") return "empty";
    if(typeof cadena !== "string") throw new TypeError("No estring argument");

    const specialChars = '!@#$^&%*()+=-[]/{}|:<>?,.'

    for (let i = 0; i < specialChars.length; i++) {
      cadena = cadena.replace(new RegExp('\\' + specialChars[i], 'gi'), '')
    }

    cadena = cadena.toLowerCase()

    cadena = cadena.replace(/ /g, '')

    cadena = cadena.replace(/á/gi, 'a')
    cadena = cadena.replace(/é/gi, 'e')
    cadena = cadena.replace(/í/gi, 'i')
    cadena = cadena.replace(/ó/gi, 'o')
    cadena = cadena.replace(/ú/gi, 'u')
    cadena = cadena.replace(/ñ/gi, 'n')
    return cadena
  }
}
