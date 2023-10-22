// Example 1: Alert
function showAlert() {
    alert("This is an alert message. Click 'OK' to continue.");
}

// Example 2: Confirmation
function showConfirmation() {
    const result = confirm("Do you want to confirm an action?");
    if (result) {
        alert("You confirmed the action.");
    } else {
        alert("You canceled the action.");
    }
}

// Example 3: Prompt
function showPrompt() {
    const userInput = prompt("Please enter your name:", "Seidulla");
    if (userInput !== null) {
        alert("Hello, " + userInput + "!");
    } else {
        alert("You didn't enter a name.");
    }
}


   // Function to show a tab's content when a tab is clicked.
function showTab(tabId) {
    const tabContents = document.querySelectorAll(".tab-content");  // Get tab content elements.
    const tabButtons = document.querySelectorAll(".tab-button");  // Get tab buttons.

    tabContents.forEach((content) => content.classList.remove("active"));  // Hide all tab contents.
    tabButtons.forEach((button) => button.classList.remove("active"));  // Deactivate all tab buttons.

    const selectedTab = document.getElementById(tabId);  // Get the selected tab content.
    selectedTab.classList.add("active");  // Show the selected tab content.

    const selectedButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);  // Get the selected tab button.
    selectedButton.classList.add("active");  // Mark the selected tab button as active.
}

// Show the initial tab (e.g., Tab 1) on page load.
showTab("tab1");
