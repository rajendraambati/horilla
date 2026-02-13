const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.static('static'));
app.use(express.static('staticfiles'));

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Horilla - HRMS</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          padding: 60px 40px;
          max-width: 600px;
          text-align: center;
        }
        
        h1 {
          color: #333;
          font-size: 2.5em;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        p {
          color: #666;
          font-size: 1.1em;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .info {
          background: #f5f5f5;
          border-left: 4px solid #667eea;
          padding: 20px;
          margin: 30px 0;
          text-align: left;
          border-radius: 6px;
        }
        
        .info h3 {
          color: #333;
          margin-bottom: 10px;
          font-size: 1.2em;
        }
        
        .info p {
          color: #555;
          margin: 8px 0;
          font-size: 0.95em;
        }
        
        .note {
          background: #fff3cd;
          border: 1px solid #ffc107;
          color: #856404;
          padding: 15px;
          border-radius: 6px;
          margin: 30px 0;
          font-size: 0.95em;
        }
        
        .footer {
          color: #999;
          font-size: 0.9em;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Horilla HRMS</h1>
        <p>Django-based Human Resource Management System</p>
        
        <div class="info">
          <h3>Project Information</h3>
          <p><strong>Branch:</strong> 1.0</p>
          <p><strong>Repository:</strong> rajendraambati/horilla</p>
          <p><strong>Framework:</strong> Django (Python)</p>
        </div>
        
        <div class="note">
          <strong>Note:</strong> This is a Django/Python backend application. To run it locally with full functionality, you'll need to set up a Python environment with Django and the required dependencies. Check the repository README for detailed setup instructions.
        </div>
        
        <div class="info">
          <h3>Setup Instructions</h3>
          <p>1. Clone the repository</p>
          <p>2. Create a Python virtual environment</p>
          <p>3. Install dependencies: <code>pip install -r requirements.txt</code></p>
          <p>4. Run migrations: <code>python manage.py migrate</code></p>
          <p>5. Start the server: <code>python manage.py runserver</code></p>
        </div>
        
        <div class="footer">
          <p>Visit the <a href="https://github.com/rajendraambati/horilla" target="_blank" style="color: #667eea;">GitHub repository</a> for more information.</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
