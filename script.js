const months = [
    { name: "January", days: 31, start: 3 },
    { name: "February", days: 28, start: 6 },
    { name: "March", days: 31, start: 6 },
    { name: "April", days: 30, start: 2 },
    { name: "May", days: 31, start: 4 },
    { name: "June", days: 30, start: 0 },
    { name: "July", days: 31, start: 2 },
    { name: "August", days: 31, start: 5 },
    { name: "September", days: 30, start: 1 },
    { name: "October", days: 31, start: 3 },
    { name: "November", days: 30, start: 6 },
    { name: "December", days: 31, start: 1 }
];

function generateCalendar() {
    let html = "";
    months.forEach((month) => {
        html += `<div class='month'><h2>${month.name} 2025</h2><table class='table table-bordered'><tr>`;
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(day => {
            html += `<th>${day}</th>`;
        });
        html += "</tr><tr>";
        let dayCounter = 0;
        for (let i = 0; i < month.start; i++) {
            html += "<td></td>";
            dayCounter++;
        }
        for (let day = 1; day <= month.days; day++) {
            html += `<td>${day}</td>`;
            dayCounter++;
            if (dayCounter % 7 === 0) {
                html += "</tr><tr>";
            }
        }
        while (dayCounter % 7 !== 0) {
            html += "<td></td>";
            dayCounter++;
        }
        html += "</tr></table></div>";
    });
    document.getElementById("calendar").innerHTML = html;
}

generateCalendar();
