let counter = 1;
const circles = document.querySelector('.circles');
const form = document.querySelector('.form');
const createCircleInput = (index) => {
    const parent_element = document.createElement('div');
    parent_element.classList.add('flex', 'flex-row', 'justify-start', 'items-center', 'gap-x-4');
    parent_element.innerHTML =
        `<div>Circle ${index}</div>
        <input type="number" name="circle_${index}" id="" min="1" max="10" class="border-2 border-black w-20 p-2" required>`;
    return parent_element;
}
const addCircle = () => {
    circles.appendChild(createCircleInput(++counter));
}
const clearCircles = () => {
    circles.innerHTML = createCircleInput(1).outerHTML;
    counter = 1;
}

document.querySelector('.add-circle').addEventListener('click', addCircle);
document.querySelector('.reset-all').addEventListener('click', clearCircles);

form.addEventListener('submit', function (event) {
    const form_data = new FormData(form);
    console.log('________');
    for (const form_entry of form_data.entries()) {
        console.log(form_entry);
    }
    console.log('_________');
    event.preventDefault();
});

