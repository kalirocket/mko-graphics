let counter = 1;
const canvas = document.querySelector('#solarSystem');
const ctx = canvas.getContext('2d');
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
const clearCanvasWin = () => ctx.clearRect(0, 0, canvas.width, canvas.height);
const addCircle = () => circles.appendChild(createCircleInput(++counter));

const clearCircles = () => {
    circles.innerHTML = createCircleInput(1).outerHTML;
    counter = 1;
    clearCanvasWin();
}

document.querySelector('.add-circle').addEventListener('click', addCircle);
document.querySelector('.reset-all').addEventListener('click', clearCircles);
form.addEventListener('submit', function (e) {
    const form_data = new FormData(form);
    clearCanvasWin();
    drawSolarSystem(form_data.entries());
    e.preventDefault();
});

const drawSolarSystem = (circles) => {
    const center_x = canvas.width / 2;
    const center_y = canvas.height / 2;

    ctx.beginPath();
    let ring_radius = 30;
    ctx.arc(center_x, center_y, ring_radius, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MK', center_x, center_y);


    ring_radius += 30;


    for (const circle of circles) {
        const no_of_circles = circle[1];
        ctx.beginPath();
        ctx.arc(center_x, center_y, ring_radius, 0, 2 * Math.PI);
        ctx.stroke();

        for (let i = 0; i < no_of_circles; i++) {
            const angle = (i / no_of_circles) * 2 * Math.PI;
            const child_x = center_x + (ring_radius * Math.cos(angle));
            const child_y = center_y + (ring_radius * Math.sin(angle));
            ctx.beginPath();
            ctx.arc(child_x, child_y, 10, 0, 2 * Math.PI);
            ctx.fill();
        }

        ring_radius += 30;
    }
}



