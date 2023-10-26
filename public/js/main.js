let counter = 1;
const canvas = document.getElementById('solarSystem');
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
const addCircle = () => {
    circles.appendChild(createCircleInput(++counter));
}
const clearCircles = () => {
    
    circles.innerHTML = createCircleInput(1).outerHTML;
    counter = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.querySelector('.add-circle').addEventListener('click', addCircle);
document.querySelector('.reset-all').addEventListener('click', clearCircles);

form.addEventListener('submit', function (event) {
    const form_data = new FormData(form);
    // console.log('________');
    // for (const form_entry of form_data.entries()) {
    //     console.log(form_entry);
    // }
    // console.log('_________');
    drawSolarSystem(form_data.entries());
    event.preventDefault();
});



function drawSolarSystem(arr) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let ringRadius = 30; // Initial radius for the first parent circle

    for (const circle of arr) {
        const circleName = circle[0];
        const numChildCircles = circle[1];

        // Draw the parent circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw child circles
        for (let i = 0; i < numChildCircles; i++) {
            const angle = (i / numChildCircles) * 2 * Math.PI;
            const childX = centerX + ringRadius * Math.cos(angle);
            const childY = centerY + ringRadius * Math.sin(angle);

            ctx.beginPath();
            ctx.arc(childX, childY, 10, 0, 2 * Math.PI);
            ctx.fill();
        }

        // Increase the ring radius for the next parent circle
        ringRadius += 30;
    }
}

// const solarSystemData = [
//     ['circle_1', 4],
//     ['circle_2', 5],
//     ['circle_3', 1]
// ];


