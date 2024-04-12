const btn = document.getElementById('download-btn');

btn.addEventListener("click", generatePDF);

function generatePDF() { 
    const element = document.getElementById('page'); 
    const opt = {
        margin:       0.2,
        filename:     'pasko_cv.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { windowWidth: 1240, scale: 2 },
        jsPDF:        { unit: 'in', format: 'tabloid', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save(); 
}