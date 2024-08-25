// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    document.getElementById('generate').addEventListener('click', async () => {
        const glitchPercentage = document.getElementById('glitch').value;
        const nonOpenable = document.getElementById('non-openable').checked;

        // Create a new PDF document
        const pdf = new jsPDF();

        // Add random text and images
        pdf.text(generateRandomText(), 10, 10);
        pdf.addImage(generateRandomImage(), 'JPEG', 15, 40, 180, 160);

        // Apply glitch effect based on slider value
        if (glitchPercentage > 0) {
            applyGlitchEffect(pdf, glitchPercentage);
        }

        // Save PDF file
        const pdfBytes = pdf.output('arraybuffer');

        // Handle non-openable file
        if (nonOpenable) {
            // Modify PDF bytes to make it non-openable (this is a placeholder)
            // In reality, making a file non-openable involves corrupting its structure, which is complex
            const byteArray = new Uint8Array(pdfBytes);
            byteArray[0] = 0; // Example modification
        }

        // Trigger download
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'generated.pdf';
        a.click();
        URL.revokeObjectURL(url);
    });

    // Generate random text
    function generateRandomText() {
        return 'Random Text ' + Math.random().toString(36).substring(7);
    }

    // Generate random image
    function generateRandomImage() {
        // Placeholder for image generation
        // You might want to use a real image here
        return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAD...'; // Example base64 image data
    }

    // Apply glitch effect to the PDF
    function applyGlitchEffect(pdf, percentage) {
        // This function is a placeholder; implementing a glitch effect involves more complex processing
        console.log(`Applying ${percentage}% glitch effect`);
    }
});
