module.exports = class Notas {
    constructor(map) {
        this.map = map;
    }

    AgregarNota(autor, mensaje) {
        if (!this.map.has(autor)) {
            this.map.set(autor, []);
            return this.map.get(autor).push({ autor: autor, nota: mensaje });
        } else {
            return this.map.get(autor).push({ autor: autor, nota: mensaje });
        };
    };

    RemoverNota(autor, mensaje) {
        if (!this.map.has(autor)) {
            return 'Actualmente no tienes notas guardadas';
        } else {
            if (this.map.get(autor).map(a => a.nota.indexOf(mensaje) != -1)) {
                return this.map.get(autor).splice(this.map.get(autor).map(e => e.nota.indexOf(mensaje)), 1);
            } else {
                return 'Mensaje no existente';
            };
        };
    };

};