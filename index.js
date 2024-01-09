document.getElementById("btn").addEventListener("click", function () {
    var inputText = document.getElementById("lines").value

    // using inbuilt methods here
    const words = inputText.match(/\b\w+\b/g) || [];
    const letters = inputText.replace(/[^a-zA-Z]/g, '');
    const paragraphs = inputText.split(/\n\s*\n/).filter(Boolean);
    
    document.getElementById('wordCount').textContent = words.length;
    document.getElementById('letterCount').textContent = letters.length;
    document.getElementById('paragraphCount').textContent = paragraphs.length;
    
})