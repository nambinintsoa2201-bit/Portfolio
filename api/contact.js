export default async function handler(req, res) {
  // 1. Handle CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const body = req.body;
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return res.status(500).json({ 
        success: false, 
        message: 'Clé API manquante (WEB3FORMS_ACCESS_KEY) dans Vercel.' 
      });
    }
    
    const payload = {
      ...body,
      access_key: accessKey
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Spoof origin and referer to match the authorized domain
        'Origin': 'https://portfolio-three-blue-23.vercel.app',
        'Referer': 'https://portfolio-three-blue-23.vercel.app/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
      },
      body: JSON.stringify(payload),
    });

    const contentType = response.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const errorText = await response.text();
      if (errorText.includes("Just a moment") || response.status === 403) {
        return res.status(response.status).json({
          success: false,
          message: "Web3Forms bloque la connexion depuis Vercel. Veuillez vérifier l'autorisation du domaine sur votre tableau de bord Web3Forms.",
          error: "Cloudflare/403 Blocked"
        });
      }
      return res.status(response.status).json({
        success: false,
        message: 'Web3Forms a renvoyé un format inattendu.',
        error: errorText.substring(0, 100)
      });
    }
    
    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: data.message || 'Erreur Web3Forms',
        debug: data
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Proxy Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Erreur interne du proxy.',
      error: error.message 
    });
  }
}
