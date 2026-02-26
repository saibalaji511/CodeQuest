const courses = [
    { id: 'html', title: 'HTML5', desc: 'Structure of the web.' },
    { id: 'css', title: 'CSS3', desc: 'Styling and layout.' },
    { id: 'js', title: 'JavaScript', desc: 'Interactive web logic.' },
    { id: 'c', title: 'C Language', desc: 'Foundations of programming.' },
    { id: 'cpp', title: 'C++', desc: 'Object-oriented C.' },
    { id: 'java', title: 'Java', desc: 'Write once, run anywhere.' },
    { id: 'python', title: 'Python', desc: 'Clean syntax and data logic.' },
    { id: 'mysql', title: 'MySQL', desc: 'Relational database management.' },
    { id: 'xml', title: 'XML', desc: 'Data storage and transport.' }
];

let completedCourses = JSON.parse(localStorage.getItem('userProgress')) || [];

function renderCourses() {
    const container = document.getElementById('course-list');
    container.innerHTML = '';

    courses.forEach((course) => {
        const isCompleted = completedCourses.includes(course.id);

        let cardClass = 'course-card';
        let statusHtml = '';

        if (isCompleted) {
            cardClass += ' completed';
            statusHtml = `<span class="status-badge status-completed">Completed ✓</span>`;
        } else {
            statusHtml = `<span class="status-badge status-active">Start Learning</span>`;
        }

        const card = document.createElement('div');
        card.className = cardClass;
        card.innerHTML = `
            ${statusHtml}
            <h2>${course.title}</h2>
            <p>${course.desc}</p>
            ${!isCompleted ? `<button onclick="completeCourse('${course.id}')">Mark as Completed</button>` : ''}
        `;

        container.appendChild(card);
    });
}

// Attach to the window object so the inline HTML button can find it
window.completeCourse = function (courseId) {
    if (!completedCourses.includes(courseId)) {
        completedCourses.push(courseId);
        localStorage.setItem('userProgress', JSON.stringify(completedCourses));
        renderCourses();
    }
}

// Using an Event Listener for the reset button
document.getElementById('reset-btn').addEventListener('click', function () {
    if (confirm('Are you sure you want to erase all your progress?')) {
        completedCourses = [];
        localStorage.removeItem('userProgress');
        renderCourses();
    }
});

// Initial render
renderCourses();
