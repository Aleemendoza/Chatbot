function crearCache() {

    var cache = {

        nombre: "toni"

    };
    function sacarDeCache(palabra) {

        return console.log(cache[palabra])

    }

    function guardarEnElCache(palabra, value) {

        cache[palabra] = value;
        return console.log(cache)

    }

}
sacarDeCache("solano")
guardarEnElCache("saludo", "hola!")

sacarDeCache("saludo");
