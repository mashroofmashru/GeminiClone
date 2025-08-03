import GEMINI_API_KEY from './api';
import {
  GoogleGenAI,
} from '@google/genai';

async function genmain(prompt) {
  const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  let res="";
  for await (const chunk of response) {
    res+=chunk.text;
  }
  return(res);
}

export default genmain;
