// api/twelve-data.js
export default async function handler(req, res) {
  // 1. Récupération de la clé API depuis les variables d'environnement Vercel
  const apiKey = process.env.TWELVE_DATA_API_KEY;

  // 2. Vérification de sécurité
  if (!apiKey) {
    return res.status(500).json({ 
      error: "Configuration serveur manquante", 
      message: "La variable TWELVE_DATA_API_KEY n'est pas définie dans Vercel." 
    });
  }

  // 3. Récupération des paramètres depuis l'URL du frontend
  const { symbol, interval } = req.query;

  if (!symbol || !interval) {
    return res.status(400).json({ error: "Paramètres manquants (symbol ou interval)" });
  }

  try {
    // 4. Appel vers l'API Twelve Data (Serveur vers Serveur = Pas de CORS)
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&outputsize=100&apikey=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "error") {
      // Propagation de l'erreur de l'API (ex: clé invalide, limite atteinte)
      return res.status(400).json(data);
    }

    // 5. Renvoi des données au frontend
    return res.status(200).json(data);

  } catch (error) {
    console.error("Erreur Proxy API:", error);
    return res.status(500).json({ error: "Erreur interne du serveur proxy" });
  }
}