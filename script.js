
        // Function to add a task to the list
        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const taskText = taskInput.value.trim();
    
            if (taskText === "") {
                return; // Don't add empty tasks
            }
    
            const taskList = document.getElementById("taskList");
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span class="task">${taskText}</span>
                <button onclick="markComplete(this)">Mark Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(taskItem);
    
            taskInput.value = ""; // Clear the input field
        }
    
        //  to mark a task as complete
        function markComplete(button) {
            const task = button.parentElement.querySelector(".task");
            task.style.textDecoration = "line-through";
            button.disabled = true;
        }
    
        // to delete a task
        function deleteTask(button) {
            const taskItem = button.parentElement;
            taskItem.remove();
        }
   
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        let valid = true;

        if (name.trim() === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            valid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        if (email.trim() === '' || !isValidEmail(email)) {
            document.getElementById('emailError').textContent = 'Valid email is required';
            valid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        if (phone.trim() === '' || !isValidPhone(phone)) {
            document.getElementById('phoneError').textContent = 'Valid phone is required';
            valid = false;
        } else {
            document.getElementById('phoneError').textContent = '';
        }

        if (!valid) {
            e.preventDefault(); // Prevent form submission if there are errors
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        return emailRegex.test(email);
    }

    const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
  let scale = 1;
  const animationDuration = 1000; // Animation duration in milliseconds

  const startTime = performance.now();

  function animate(currentTime) {
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < animationDuration) {
      scale = 1 + (elapsedTime / animationDuration) * 0.1; // Adjust the scale factor
      submitBtn.style.transform = `scale(${scale})`;

      requestAnimationFrame(animate);
    } else {
      // Animation complete
      submitBtn.style.transform = "scale(1)";
    }
  }

  requestAnimationFrame(animate);
});

function toggleAccordion(id) {
    var panel = document.getElementById(id);
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
}

// Initially, hide all panels
var accordions = document.querySelectorAll('.list-group.panel');
accordions.forEach(function (panel) {
    panel.style.display = 'none';
});

const interactiveButton = document.getElementById("interactive-button");

// Add a click event listener to the button
interactiveButton.addEventListener("click", function () {
    // Toggle the background color between red and green
    if (interactiveButton.style.backgroundColor === "red") {
        interactiveButton.style.backgroundColor = "green";
    } else {
        interactiveButton.style.backgroundColor = "red";
    }

    // Change the button text
    interactiveButton.textContent = (interactiveButton.textContent === "Add") ? "Added!" : "Add";
});
