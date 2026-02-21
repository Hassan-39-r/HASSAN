
import { GoogleGenAI, Type } from "@google/genai";
import { AuditResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function auditCode(code: string): Promise<AuditResult[]> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Audit the following source code for security vulnerabilities. Be critical and professional. 
      Code:
      ${code}`,
      config: {
        systemInstruction: "You are a world-class cybersecurity expert specializing in static code analysis. Your goal is to identify common vulnerabilities (OWASP Top 10, memory leaks, logic flaws).",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              vulnerability: { type: Type.STRING },
              severity: { type: Type.STRING, description: "Low, Medium, High, or Critical" },
              description: { type: Type.STRING },
              recommendation: { type: Type.STRING }
            },
            required: ["vulnerability", "severity", "description", "recommendation"]
          }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Error auditing code:", error);
    throw error;
  }
}
