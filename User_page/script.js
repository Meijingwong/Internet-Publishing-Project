const filterBtns = document.querySelectorAll('.filter-btn');
const Packages = document.querySelectorAll('.package');

let activeBtn = "all";

showPackageFilter(activeBtn);

filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showPackageFilter(btn.id);
        btn.classList.add('active');
    });
});

function resetActiveBtn() {
    filterBtns.forEach((btn) => {
        btn.classList.remove('active');
    });
}

function showPackageFilter(newFilterBtn) {
    activeBtn = newFilterBtn;
    Packages.forEach((package) => {
        if(package.classList.contains(activeBtn)) {
            package.style.display = "grid";
        } else {
            package.style.display = "none";
        }
    });
}
