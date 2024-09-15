import { NextResponse } from "next/server";

export async function POST(request) {
  const MODEL_ID = "8w6yyp2q";
  const BASETEN_API_KEY = "YMKFudUr.FcjOTi13DlaR3ZtCbBIumoXeqFJy25yx"; // Paste from Discord

  const params = await request.json();
  const messages = [
    {
      role: "system",
      content: params.prompt,
    },
    { role: "user", content: params.prompt },
  ];

  const payload = {
    messages: messages,
    stream: false,
    max_tokens: 9048,
    temperature: 0.9,
  };

  try {
    const response = await fetch(
      `https://model-${MODEL_ID}.api.baseten.co/production/predict`,
      {
        method: "POST",
        headers: {
          Authorization: `Api-Key ${BASETEN_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const reader = response.body.getReader();
    let decoder = new TextDecoder();
    let result = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      result += decoder.decode(value, { stream: true });
    }
    console.log("The response is", result);
    return NextResponse.json({ result });
  } catch (error) {
    console.error("API request failed:", error);
    return NextResponse.json({ error: error.message });
  }
}
