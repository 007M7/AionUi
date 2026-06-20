import OpenAI from 'openai';
import { AuthType } from '@office-ai/aioncli-core';
import type { RotatingApiClientOptions } from './RotatingApiClient';
import { RotatingApiClient } from './RotatingApiClient';

export interface OpenAIClientConfig {
  baseURL?: string;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
  httpAgent?: unknown;
}

export class OpenAIRotatingClient extends RotatingApiClient<OpenAI> {
  private readonly baseConfig: OpenAIClientConfig;

  constructor(api_keys: string, config: OpenAIClientConfig = {}, options: RotatingApiClientOptions = {}) {
    const createClient = (api_key: string) => {
      const cleanedApiKey = api_key.replace(/[\s\r\n\t]/g, '').trim();
      // Use typed OpenAI client options instead of `any`
      const openaiConfig: OpenAI.ClientOptions = {
        baseURL: config.baseURL,
        apiKey: cleanedApiKey,  // Correct field name: apiKey, not api_key
        defaultHeaders: config.defaultHeaders,
      };

      if (config.httpAgent) {
        openaiConfig.httpAgent = config.httpAgent;
      }

      return new OpenAI(openaiConfig);
    };

    super(api_keys, AuthType.USE_OPENAI, createClient, options);
    this.baseConfig = config;
  }

  protected getCurrentApiKey(): string | undefined {
    // Rely solely on ApiKeyManager; do NOT read from process.env to
    // avoid breaking multi-key rotation and leaking keys to child processes.
    if (this.apiKeyManager?.hasMultipleKeys()) {
      return this.apiKeyManager.getCurrentKey();
    }
    // Use base class method for single key
    return super.getCurrentApiKey();
  }

  // Convenience methods for common OpenAI operations
  async createChatCompletion(
    params: OpenAI.Chat.Completions.ChatCompletionCreateParams,
    options?: OpenAI.RequestOptions
  ): Promise<OpenAI.Chat.Completions.ChatCompletion> {
    return await this.executeWithRetry(async (client) => {
      const result = await client.chat.completions.create(params, options);
      return result as OpenAI.Chat.Completions.ChatCompletion;
    });
  }

  async createImage(
    params: OpenAI.Images.ImageGenerateParams,
    options?: OpenAI.RequestOptions
  ): Promise<OpenAI.Images.ImagesResponse> {
    return await this.executeWithRetry((client) => {
      return client.images.generate(params, options) as Promise<OpenAI.Images.ImagesResponse>;
    });
  }

  async createEmbedding(
    params: OpenAI.Embeddings.EmbeddingCreateParams,
    options?: OpenAI.RequestOptions
  ): Promise<OpenAI.Embeddings.CreateEmbeddingResponse> {
    return await this.executeWithRetry((client) => {
      return client.embeddings.create(params, options);
    });
  }
}
