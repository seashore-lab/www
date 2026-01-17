export const examples = [
  {
    id: 'basic-agent',
    title: 'Basic Agent',
    description: 'Create a simple conversational AI agent with just a few lines of code.',
    category: 'Getting Started',
    code: `import { createAgent } from '@seashore/agent'
import { openaiText } from '@seashore/llm'

const agent = createAgent({
  name: 'assistant',
  model: openaiText('gpt-4o'),
  systemPrompt: 'You are a helpful assistant.',
})

const result = await agent.run({
  messages: [{
    role: 'user',
    content: 'Hello! How are you?'
  }],
})

console.log(result.content)`,
  },
  {
    id: 'agent-with-tools',
    title: 'Agent with Tools',
    description: 'Equip your agent with tools to interact with the world - APIs, databases, and more.',
    category: 'Core Features',
    code: `import { createAgent } from '@seashore/agent'
import { openaiText } from '@seashore/llm'
import { defineTool } from '@seashore/tool'
import { z } from 'zod'

const weatherTool = defineTool({
  name: 'get_weather',
  description: 'Get weather for a location',
  inputSchema: z.object({
    city: z.string(),
  }),
  execute: async ({ city }) => {
    // Fetch real weather data
    return { temperature: 72, condition: 'sunny' }
  },
})

const agent = createAgent({
  name: 'weather-assistant',
  model: openaiText('gpt-4o'),
  tools: [weatherTool],
})

const result = await agent.run(
  'What is the weather in Tokyo?'
)`,
  },
  {
    id: 'workflows',
    title: 'Multi-Step Workflows',
    description: 'Chain multiple AI operations together with visual workflow composition.',
    category: 'Advanced',
    code: `import { createWorkflow, createLLMNode } from '@seashore/workflow'
import { openaiText } from '@seashore/llm'

// Step 1: Generate outline
const outlineNode = createLLMNode({
  name: 'generate-outline',
  adapter: openaiText('gpt-4o'),
  systemPrompt: 'You are an outline expert.',
  prompt: (input) =>
    \`Create an outline for: \${input.topic}\`,
})

// Step 2: Write content
const contentNode = createLLMNode({
  name: 'write-content',
  adapter: openaiText('gpt-4o'),
  messages: (input, ctx) => {
    const outline = ctx.nodeOutputs['generate-outline']
    return [
      { role: 'system', content: 'Write based on outline.' },
      { role: 'user', content: \`Topic: \${input.topic}\\nOutline: \${outline}\` },
    ]
  },
})

const workflow = createWorkflow({
  name: 'article-writer',
  nodes: [outlineNode, contentNode],
  edges: [
    { from: 'generate-outline', to: 'write-content' }
  ],
  startNode: 'generate-outline',
})

const result = await workflow.execute({ topic: 'AI Agents' })`,
  },
  {
    id: 'rag',
    title: 'RAG Pipeline',
    description: 'Build retrieval-augmented generation systems with vector search.',
    category: 'Advanced',
    code: `import { createRAG, createVectorRetriever } from '@seashore/rag'
import { createVectorStore } from '@seashore/vectordb'
import { openaiText, openaiEmbedding } from '@seashore/llm'

// Set up vector store
const vectorStore = await createVectorStore({
  connectionString: process.env.DATABASE_URL,
})
const collection = await vectorStore.createCollection({
  name: 'docs',
  dimension: 1536,
})

// Create retriever with embeddings
const retriever = createVectorRetriever({
  collection,
  embed: (text) => openaiEmbedding().embed(text),
})

// Create RAG pipeline
const rag = createRAG({ retriever })

// Query with retrieved context
const context = await rag.retrieve('What is TypeScript?')
const answer = await openaiText('gpt-4o').chat({
  messages: [
    { role: 'system', content: context.systemPrompt },
    { role: 'user', content: 'What is TypeScript?' },
  ],
})`,
  },
  {
    id: 'memory',
    title: 'Conversation Memory',
    description: 'Give your agents persistent memory across conversations.',
    category: 'Advanced',
    code: `import { createAgent } from '@seashore/agent'
import { createConversationMemory } from '@seashore/memory'
import { openaiText } from '@seashore/llm'

// Create memory storage
const memory = createConversationMemory({
  store: await createMemoryStore({
    connectionString: process.env.DATABASE_URL,
  }),
})

const agent = createAgent({
  name: 'chatbot',
  model: openaiText('gpt-4o'),
  systemPrompt: 'You are a helpful assistant with memory.',
  memory, // Enable persistent memory
})

// First conversation
await agent.run('My name is Alice')

// Later - agent remembers!
await agent.run('What is my name?')
// Agent: "Your name is Alice!"`,
  },
]

export const resources = [
  {
    id: 'getting-started-guide',
    title: 'Getting Started Guide',
    description: 'A comprehensive guide to building your first AI agent with Seashore. Learn the core concepts, set up your environment, and create powerful agents in minutes.',
    image: '/images/resources/guide.svg',
    url: 'https://docs.seashore.ai/getting-started',
    category: 'Guide',
    featured: true,
  },
  {
    id: 'react-integration',
    title: 'Building AI-Powered React Apps',
    description: 'Learn how to integrate Seashore agents into React applications. Includes examples of streaming responses, state management, and generative UI.',
    image: '/images/resources/react.svg',
    url: 'https://docs.seashore.ai/react-integration',
    category: 'Tutorial',
    featured: true,
  },
  {
    id: 'workflow-orchestration',
    title: 'Advanced Workflow Patterns',
    description: 'Master complex multi-step AI workflows. Discover patterns for conditional execution, parallel processing, and error handling in agent pipelines.',
    image: '/images/resources/workflows.svg',
    url: 'https://docs.seashore.ai/workflows',
    category: 'Tutorial',
    featured: true,
  },
  {
    id: 'rag-best-practices',
    title: 'RAG Architecture Patterns',
    description: 'Deep dive into Retrieval-Augmented Generation. Learn vector database setup, chunking strategies, and context optimization for better AI responses.',
    image: '/images/resources/rag.svg',
    url: 'https://docs.seashore.ai/rag',
    category: 'Architecture',
    featured: false,
  },
  {
    id: 'memory-systems',
    title: 'Designing Memory for AI Agents',
    description: 'Explore different memory architectures for AI agents. From short-term conversation history to long-term knowledge retention.',
    image: '/images/resources/memory.svg',
    url: 'https://docs.seashore.ai/memory',
    category: 'Architecture',
    featured: false,
  },
  {
    id: 'deployment-guide',
    title: 'Deploying Agents to Production',
    description: 'A practical guide to deploying Seashore agents. Covers Cloudflare Workers, Node.js, Docker, and CI/CD best practices.',
    image: '/images/resources/deploy.svg',
    url: 'https://docs.seashore.ai/deployment',
    category: 'DevOps',
    featured: false,
  },
  {
    id: 'evaluation-metrics',
    title: 'Measuring Agent Performance',
    description: 'Learn how to evaluate and improve your AI agents. Covers automated testing, quality metrics, and A/B testing frameworks.',
    image: '/images/resources/evaluation.svg',
    url: 'https://docs.seashore.ai/evaluation',
    category: 'Engineering',
    featured: false,
  },
  {
    id: 'security-guardrails',
    title: 'AI Security Best Practices',
    description: 'Implement guardrails, content filtering, and PII detection in your agents. Learn security patterns for production AI systems.',
    image: '/images/resources/security.svg',
    url: 'https://docs.seashore.ai/security',
    category: 'Security',
    featured: false,
  },
]
