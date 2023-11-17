document.addEventListener('DOMContentLoaded', function () {
    const pickupLines = [
        "Tumhari smile kitni dangerous hai pata hai? Mere paas dil hota na, toh pakka aa jaata ispe... wo shayad thoda thoda aa raha h ;)",
        "Excuse me, but I think the stars tonight are outshone by the sparkle in your eyes, Roshnee..",
        "Just like dumplings, I have fillings for you.",
        "Is your name Roshnee? Because meeting you was a 'rosh' of good luck.",
        "Are you a flower? Because I wanna Bee with you forever.",
        "Tum oxygen aur main double hydrogen ... hamari chemistry ek dum pani ki tarah hai.",
    ];

    const pickupLineElement = document.getElementById('pickup-line');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * pickupLines.length);
        const randomPickupLine = pickupLines[randomIndex];
        pickupLineElement.textContent = randomPickupLine;
    });
});