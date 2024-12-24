
// Function to change the message when the button is clicked
function changeMessage() {
    const messageElement = document.getElementById('message');
    const personalMessageElement = document.getElementById('personalMessage');
    
    messageElement.textContent = "You're the best gift I could ever ask for! 🎁";
    personalMessageElement.textContent = "May your holiday season be filled with warmth, joy, and special moments. Looking forward to creating more memories with you in the coming year! ❤️";
    
    document.getElementById('surpriseButton').style.display = 'none';  // Hide the button after clicking
}
