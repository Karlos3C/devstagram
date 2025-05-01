import Dropzone from "dropzone";

const existDropzone = document.querySelector('#dropzone');

if (existDropzone) {
    Dropzone.autoDiscover = false;

    const dropzone = new Dropzone('#dropzone', {
        dictDefaultMessage: 'Sube aquí tu imagen',
        acceptedFiles: ".png, .jpg,.jpeg,.gif",
        addRemoveLinks: true,
        dictRemoveFile: 'Borrar Archivos',
        maxFiles: 1,
        uploadMultiple: false,
        init: function () {
            if (document.querySelector('[name="imagen"]').value.trim()) {
                const imagenPublicada = {}
                imagenPublicada.size = 1234;
                imagenPublicada.name = document.querySelector('[name="imagen"]').value.trim();

                this.options.addedfile.call(this, imagenPublicada);
                this.options.thumbnail.call(this, imagenPublicada, `/uploads/${imagenPublicada.name}`);

                imagenPublicada.previewElement.classList.add('dz-success', 'dz-complete')
            }
        }
    });

    dropzone.on('success', function (file, res) {
        document.querySelector('[name="imagen"]').value = res.imagen;
    });

    dropzone.on('removedfile', function () {
        document.querySelector('[name="imagen"]').value = '';
    })
}