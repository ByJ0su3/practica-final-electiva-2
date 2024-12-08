const fs = require('fs');
const path = require('path');

test('El archivo index.html debe contener el título "¡Hola Mundo!"', () => {
    const filePath = path.join(__dirname, 'index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    expect(htmlContent).toMatch(/<h1>¡Hola Mundo!<\/h1>/);
});
