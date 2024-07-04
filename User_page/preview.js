let previewContainer = document.querySelector('.package-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.packages .package').forEach(package => {
    package.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = package.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target) {
                preview.classList.add('active');
            } else {
                preview.classList.remove('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.btn-close').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});