const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };

  try {
    const data = JSON.parse(event.body);
    const { tipo, temp, hum, luz, imageBase64, climaExt, ciudad, hora, pronosticoSemanal, gustosPrevios } = data;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    let prompt = "";
    let content = [];

    // MODO 1: PREDICCIÓN SEMANAL Y LISTA DE COMPRAS
    if (tipo === "semanal") {
        prompt = `Eres un perfumista experto AI. 
        El pronóstico de los próximos 7 días en ${ciudad} es: ${JSON.stringify(pronosticoSemanal)}.
        Historial de gustos comprobados del usuario: ${gustosPrevios || "Aún no hay preferencias registradas. Sé creativo."}.
        
        TAREA: Crea una planificación semanal y lista de compras de aceites esenciales/fragancias.
        Relaciona las fragancias con los cambios de clima de la semana y los gustos específicos del usuario.
        Responde en formato muy visual usando viñetas. Estructura: 1. Resumen de la semana, 2. Lista de Compras, 3. Asignación por días.`;
        content = [prompt];
    } 
    // MODO 2: ANÁLISIS EN TIEMPO REAL (ACTUAL)
    else {
        prompt = `Eres un sistema de Smart Home en ${ciudad}. Son las ${hora}.
        DATOS SENSORES: Temp: ${temp}°C, Hum: ${hum}%, Luz: ${luz}lx. CLIMA EXTERIOR: ${climaExt}.
        Gustos del usuario: ${gustosPrevios || "Sin datos"}. (Incluye estas notas si encajan con el ambiente).
        
        INSTRUCCIONES:
        1. Analiza el estilo visual si hay imagen.
        2. Diseña una fragancia que armonice interior/exterior y los gustos del usuario.
        Respuesta en máximo 4 líneas.`;
        
        content = [prompt];
        if (imageBase64) {
            content.push({
                inlineData: { data: imageBase64.split(',')[1], mimeType: imageBase64.match(/data:(.*?);/)[1] }
            });
        }
    }

    const result = await model.generateContent(content);
    return { statusCode: 200, body: JSON.stringify({ mezcla: result.response.text() }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};