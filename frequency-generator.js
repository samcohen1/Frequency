const frequencySlider = document.getElementById("frequencySlider");
const output = document.getElementById("output");

const frequencies = [
    1750, // A4 note
    1830, // A5 note
    1900 // A6 note
];

function updateFrequency() {
    const position = frequencySlider.value / 100; // Normalize slider position to a value between 0 and 1
    const index = Math.floor(position * frequencies.length); // Map slider position to an index in the frequencies array
    const frequency = frequencies[index]; // Get the frequency corresponding to the index

    output.textContent = `Frequency: ${frequency} Hz`;
}

frequencySlider.addEventListener("input", updateFrequency);
updateFrequency(); // Set initial frequency on page load