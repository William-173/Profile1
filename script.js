document.getElementById("forumButton").onclick = function() {
    document.getElementById("profile").style.display = "none"; // Hide profile section
    document.getElementById("forum").style.display = "block"; // Show forum section
};

document.getElementById("backButton").onclick = function() {
    location.reload(); // Reload the page to go back
};

document.getElementById("copyButton").onclick = function() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const personality = document.getElementById("personality").value;
    const greeting = document.getElementById("greeting").value;

    const forumData = `Name: ${name}\nGender: ${gender}\nAge: ${age}\nPersonality: ${personality}\nGreeting: ${greeting}`;
    navigator.clipboard.writeText(forumData)
        .then(() => {
            alert('Forum data copied to clipboard!');
        })
        .catch(err => {
            alert('Failed to copy: ', err);
        });
};
