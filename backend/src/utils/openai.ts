import OpenAI from 'openai';
import { config } from '../config';

const client = new OpenAI({ apiKey: config.openaiKey });

export async function evaluateCodingSubmission(code: string, language: string, prompt: string) {
  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: `${prompt}\n\nCode:\n${code}`
  });
  return response.output[0]?.content[0]?.text ?? 'No evaluation available';
}

export async function parseResume(text: string) {
  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: `Extract key skills, experience, and ATS score from this resume text:\n\n${text}`
  });
  return response.output[0]?.content[0]?.text ?? '';
}
