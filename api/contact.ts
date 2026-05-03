export default async function handler(req: any, res: any) {
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
      console.error('Missing WEB3FORMS_ACCESS_KEY environment variable');
      return res.status(500).json({ 
        success: false, 
        message: 'Clé API manquante (WEB3FORMS_ACCESS_KEY). Veuillez l\'ajouter dans les réglages Vercel.' 
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
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: data.message || 'Erreur Web3Forms',
        debug: data
      });
    }

    return res.status(200).json(data);
  } catch (error: any) {
    console.error('Proxy Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Erreur de connexion au serveur proxy.',
      error: error.message 
    });
  }
}
