document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('imageUpload');
    const gallery = document.getElementById('gallery');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        };

        reader.readAsDataURL(file);
        fileInput.value = ""; // Reset the input
    } else {
        alert("Please choose an image to upload.");
    }
});
