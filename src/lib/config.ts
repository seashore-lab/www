// Static config imported at build time
// In production, these would be imported from YAML
// For simplicity in this standalone project, we're using TypeScript configs

export const siteConfig = {
  name: 'Seashore Lab',
  description: 'TypeScript AI Agent Development Framework',
  url: 'https://seashore.ai',
  repo: 'https://github.com/seashore-lab/seashore',

  navigation: [
    {
      label: 'Products',
      items: [
        {
          label: 'seashore',
          description: 'Modular TypeScript Agent Framework',
          url: 'https://github.com/seashore-lab/seashore',
          icon: 'package',
        },
      ],
    },
    {
      label: 'Docs',
      url: 'https://docs.seashore.ai',
    },
    {
      label: 'Resources',
      url: '/resources',
    },
    {
      label: 'About',
      url: '/about',
    },
  ],

  footer: {
    links: [
      { label: 'GitHub', url: 'https://github.com/seashore-lab', icon: 'github' },
      { label: 'Discord', url: 'https://discord.gg/seashore', icon: 'message-square' },
      { label: 'X', url: 'https://x.com/seashore_ai', icon: 'x' },
    ],
    email: 'hello@seashore.ai',
    copyright: '© 2025 Seashore Lab. All rights reserved.',
  },
}

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

export const aboutContent = `# About Seashore Lab

We're building the **infrastructure for the AI-native era** — empowering developers to create intelligent agents that reason, remember, and take action.

## Our Mission

The future of software is AI-native. Applications that can understand context, learn from interactions, and autonomously solve problems. But building these systems shouldn't require a PhD in machine learning or lock you into a proprietary ecosystem.

**Seashore Lab exists to democratize AI agent development.**

We provide the tools, frameworks, and best practices that enable any developer to build production-ready AI agents with TypeScript — the language of the web.

## What We Believe

### **Freedom Matters**

Your AI infrastructure shouldn't be held hostage by any single company's platform. We build on open standards, support multiple LLM providers, and ensure you own your stack.

### **Developers First**

We are developers building for developers. Our frameworks prioritize type safety, great DX, and production-ready patterns over hype and marketing.

### **Pragmatic AI**

Not everything needs AI. We focus on real use cases where agents provide genuine value — customer support, data analysis, workflow automation, content generation.

## The Seashore Framework

Our flagship product, **seashore**, is a modular TypeScript agent framework designed from the ground up for the AI-native application stack.

- **ReAct Agents**: Reasoning and acting in a loop
- **Tool System**: Type-safe, composable tools
- **Workflows**: Visual orchestration of multi-step AI pipelines
- **RAG**: Retrieval-augmented generation with vector search
- **Memory**: Short-term, mid-term, and long-term memory systems
- **MCP**: Model Context Protocol for external integrations
- **GenUI**: React components for generative interfaces
- **Observability**: Tracing, logging, and token counting
- **Evaluation**: Automated testing and quality metrics
- **Security**: Guardrails and content filtering
- **Deploy**: One-command deployment to Cloudflare Workers and Node.js

Built on **@tanstack/ai** — not tied to Vercel, not tied to any SaaS platform.

## Contact

- **Email**: [hello@seashore.ai](mailto:hello@seashore.ai)
- **GitHub**: [github.com/seashore-lab](https://github.com/seashore-lab)
- **Discord**: [Join our community](https://discord.gg/seashore)
- **X/Twitter**: [@seashore_ai](https://x.com/seashore_ai)

---

*Seashore Lab is based in San Francisco, building for developers worldwide.*`
