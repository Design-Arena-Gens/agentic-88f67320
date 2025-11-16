'use client';

import { useState } from 'react';
import { Cpu, Code, Mic, Brain, Settings, Zap, Monitor, CheckCircle, AlertCircle, Terminal, Sparkles } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');
  const [voiceDemo, setVoiceDemo] = useState(false);

  const sections = [
    { id: 'overview', name: 'Overview', icon: Sparkles },
    { id: 'languages', name: 'Languages & Tools', icon: Code },
    { id: 'architecture', name: 'Architecture', icon: Cpu },
    { id: 'nlp', name: 'NLP & ML', icon: Brain },
    { id: 'hardware', name: 'Hardware', icon: Monitor },
    { id: 'challenges', name: 'Challenges', icon: AlertCircle },
    { id: 'testing', name: 'Testing', icon: CheckCircle },
    { id: 'customization', name: 'Customization', icon: Settings },
    { id: 'demo', name: 'Live Demo', icon: Terminal },
  ];

  const languagesData = [
    {
      category: 'Core Backend',
      items: [
        { name: 'Python', use: 'Primary language for AI/ML, NLP processing, and backend logic', level: 'Essential' },
        { name: 'Node.js/TypeScript', use: 'Real-time event handling, API services, desktop integration', level: 'Recommended' },
        { name: 'Rust/C++', use: 'Performance-critical components, system-level operations', level: 'Optional' },
      ]
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'TensorFlow/PyTorch', use: 'Machine learning model training and inference', level: 'Essential' },
        { name: 'Transformers (Hugging Face)', use: 'Pre-trained NLP models, text understanding', level: 'Essential' },
        { name: 'spaCy/NLTK', use: 'Natural language processing, entity recognition', level: 'Essential' },
        { name: 'LangChain', use: 'LLM integration, chain-of-thought reasoning', level: 'Recommended' },
        { name: 'FastAPI/Flask', use: 'REST API development, microservices', level: 'Essential' },
        { name: 'Electron/Tauri', use: 'Desktop application framework', level: 'Recommended' },
      ]
    },
    {
      category: 'Voice & Audio',
      items: [
        { name: 'Whisper (OpenAI)', use: 'Speech-to-text conversion', level: 'Essential' },
        { name: 'Porcupine/Picovoice', use: 'Wake word detection ("Hey Jarvis")', level: 'Essential' },
        { name: 'Coqui TTS/Bark', use: 'Text-to-speech synthesis', level: 'Essential' },
        { name: 'PyAudio/SoundDevice', use: 'Audio capture and playback', level: 'Essential' },
      ]
    },
    {
      category: 'AI/ML Tools',
      items: [
        { name: 'OpenAI API/Anthropic Claude', use: 'Advanced language understanding', level: 'Recommended' },
        { name: 'Ollama/LM Studio', use: 'Local LLM hosting (privacy-focused)', level: 'Recommended' },
        { name: 'ChromaDB/Pinecone', use: 'Vector databases for RAG', level: 'Optional' },
        { name: 'scikit-learn', use: 'Traditional ML algorithms', level: 'Recommended' },
      ]
    }
  ];

  const architectureComponents = [
    {
      layer: 'Input Layer',
      components: [
        { name: 'Voice Input Module', desc: 'Captures audio, detects wake words, converts speech to text' },
        { name: 'Text Input Module', desc: 'Accepts typed commands via CLI or GUI' },
        { name: 'System Monitoring', desc: 'Tracks CPU, memory, battery, network status' },
      ]
    },
    {
      layer: 'Processing Layer',
      components: [
        { name: 'Intent Recognition', desc: 'Classifies user intent using NLP models' },
        { name: 'Context Manager', desc: 'Maintains conversation history and session state' },
        { name: 'Entity Extraction', desc: 'Identifies entities like dates, files, applications' },
        { name: 'Decision Engine', desc: 'Routes requests to appropriate action handlers' },
      ]
    },
    {
      layer: 'Intelligence Layer',
      components: [
        { name: 'Language Model', desc: 'GPT-4, Claude, or local LLM for understanding & generation' },
        { name: 'Knowledge Base', desc: 'RAG system with vectorized personal data' },
        { name: 'Learning Module', desc: 'Adapts to user preferences over time' },
      ]
    },
    {
      layer: 'Action Layer',
      components: [
        { name: 'System Control', desc: 'Opens apps, controls system settings, manages files' },
        { name: 'Web Automation', desc: 'Browser control, web scraping, API calls' },
        { name: 'Smart Home Integration', desc: 'IoT device control' },
        { name: 'Productivity Tools', desc: 'Calendar, email, task management' },
      ]
    },
    {
      layer: 'Output Layer',
      components: [
        { name: 'Voice Response', desc: 'TTS synthesis with personality/emotion' },
        { name: 'Visual Display', desc: 'GUI notifications, dashboards, visualizations' },
        { name: 'Action Execution', desc: 'Performs requested tasks' },
      ]
    }
  ];

  const hardwareSpecs = [
    {
      tier: 'Minimum (Basic Assistant)',
      specs: [
        'CPU: Intel i5-8th gen / AMD Ryzen 5 3600',
        'RAM: 8GB DDR4',
        'GPU: Integrated graphics',
        'Storage: 256GB SSD',
        'Microphone: Any USB microphone',
        'Note: Relies heavily on cloud APIs'
      ]
    },
    {
      tier: 'Recommended (Local Processing)',
      specs: [
        'CPU: Intel i7-11th gen / AMD Ryzen 7 5800X',
        'RAM: 16GB DDR4',
        'GPU: NVIDIA RTX 3060 (6GB VRAM) or better',
        'Storage: 512GB NVMe SSD',
        'Microphone: Quality USB mic (Blue Yeti, Rode NT-USB)',
        'Note: Can run small LLMs locally (7B-13B parameters)'
      ]
    },
    {
      tier: 'Optimal (Full Capabilities)',
      specs: [
        'CPU: Intel i9-12th gen / AMD Ryzen 9 5950X',
        'RAM: 32GB+ DDR5',
        'GPU: NVIDIA RTX 4080/4090 (16GB+ VRAM)',
        'Storage: 1TB+ NVMe SSD',
        'Microphone: Professional XLR mic with audio interface',
        'Note: Can run large LLMs (30B+ parameters) with fast inference'
      ]
    }
  ];

  const challenges = [
    {
      challenge: 'Accurate Intent Recognition',
      solution: 'Use fine-tuned models on custom datasets. Implement fallback mechanisms. Combine rule-based and ML approaches.',
      difficulty: 'High'
    },
    {
      challenge: 'Natural Conversation Flow',
      solution: 'Maintain context across turns. Use dialogue state tracking. Implement clarification strategies.',
      difficulty: 'High'
    },
    {
      challenge: 'Real-time Performance',
      solution: 'Optimize model inference (quantization, ONNX). Use async processing. Cache common responses.',
      difficulty: 'Medium'
    },
    {
      challenge: 'Wake Word False Positives',
      solution: 'Tune sensitivity thresholds. Implement confirmation mechanisms. Use multiple detection models.',
      difficulty: 'Medium'
    },
    {
      challenge: 'Privacy & Security',
      solution: 'Local processing when possible. Encrypt stored data. Implement permission systems.',
      difficulty: 'High'
    },
    {
      challenge: 'Cross-Platform Compatibility',
      solution: 'Abstract OS-specific code. Use platform-agnostic libraries. Test extensively.',
      difficulty: 'Medium'
    },
    {
      challenge: 'Resource Management',
      solution: 'Implement smart sleep/wake cycles. Optimize memory usage. Monitor system resources.',
      difficulty: 'Low'
    }
  ];

  const testingStrategies = [
    {
      phase: 'Unit Testing',
      focus: 'Individual components',
      methods: [
        'Test NLP pipeline components in isolation',
        'Verify intent classification accuracy',
        'Test audio processing functions',
        'Validate API integrations'
      ]
    },
    {
      phase: 'Integration Testing',
      focus: 'Component interactions',
      methods: [
        'Test full voice input → action pipeline',
        'Verify context manager state handling',
        'Test multi-turn conversations',
        'Validate error handling across layers'
      ]
    },
    {
      phase: 'Performance Testing',
      focus: 'Speed & efficiency',
      methods: [
        'Measure response latency (<2s target)',
        'Monitor memory/CPU usage',
        'Test concurrent request handling',
        'Profile model inference times'
      ]
    },
    {
      phase: 'User Acceptance Testing',
      focus: 'Real-world usage',
      methods: [
        'Test with diverse accents/speech patterns',
        'Validate against common use cases',
        'Gather feedback on voice quality',
        'Assess learning/adaptation effectiveness'
      ]
    }
  ];

  const customizationOptions = [
    {
      category: 'Personality & Voice',
      options: [
        'Voice characteristics (pitch, speed, accent)',
        'Response style (formal, casual, humorous)',
        'Personality traits (helpful, witty, concise)',
        'Custom wake words',
        'Language preferences'
      ]
    },
    {
      category: 'Functional Capabilities',
      options: [
        'Enable/disable specific skills (smart home, coding, finance)',
        'Custom command shortcuts',
        'Automation routines (morning briefing, evening summary)',
        'Integration preferences (which APIs to use)',
        'Privacy settings (local-only vs cloud-enhanced)'
      ]
    },
    {
      category: 'Learning & Adaptation',
      options: [
        'User preference learning (favorite apps, common tasks)',
        'Context awareness depth',
        'Proactive suggestion frequency',
        'Memory retention policies',
        'Feedback incorporation speed'
      ]
    },
    {
      category: 'UI/UX Preferences',
      options: [
        'Visual theme (colors, animations)',
        'Notification styles',
        'Dashboard layouts',
        'Hotkey bindings',
        'Audio feedback preferences'
      ]
    }
  ];

  const implementationSteps = [
    { step: 1, title: 'Setup Development Environment', desc: 'Install Python, Node.js, set up virtual environment, install core dependencies' },
    { step: 2, title: 'Build Audio Pipeline', desc: 'Implement wake word detection, integrate Whisper for STT, set up TTS system' },
    { step: 3, title: 'Create NLP Core', desc: 'Build intent classifier, implement entity extraction, set up context manager' },
    { step: 4, title: 'Integrate LLM', desc: 'Connect to OpenAI/Claude API or set up local LLM with Ollama' },
    { step: 5, title: 'Develop Action Handlers', desc: 'Implement system control, file operations, web automation modules' },
    { step: 6, title: 'Build Desktop Interface', desc: 'Create Electron app with voice visualizer and settings panel' },
    { step: 7, title: 'Add Knowledge Base', desc: 'Set up vector database, implement RAG for personal data' },
    { step: 8, title: 'Testing & Refinement', desc: 'Comprehensive testing, performance optimization, user feedback' },
    { step: 9, title: 'Deploy & Monitor', desc: 'Package application, set up auto-updates, implement telemetry' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500/20 rounded-full glow">
                <Brain className="w-16 h-16 text-blue-400 animate-pulse-slow" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Build Your Own JARVIS
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              A comprehensive guide to creating an AI assistant for your laptop with voice control, natural language understanding, and intelligent automation
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-300">
              <span className="flex items-center gap-2"><Code className="w-4 h-4" /> Python + TypeScript</span>
              <span className="flex items-center gap-2"><Brain className="w-4 h-4" /> ML & NLP</span>
              <span className="flex items-center gap-2"><Mic className="w-4 h-4" /> Voice Control</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Real-time Processing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white glow'
                    : 'bg-slate-800 text-blue-300 hover:bg-slate-700'
                }`}
              >
                <section.icon className="w-4 h-4" />
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overview */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <div className="gradient-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text">System Overview</h2>
              <p className="text-blue-100 text-lg mb-6">
                Building an AI assistant like JARVIS involves integrating multiple complex systems: voice recognition,
                natural language processing, machine learning, system automation, and intelligent decision-making.
                This guide provides a roadmap from basic setup to advanced customization.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
                  <Mic className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Voice Interface</h3>
                  <p className="text-blue-200">Wake word detection, speech-to-text, and natural voice synthesis</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
                  <Brain className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">AI Intelligence</h3>
                  <p className="text-blue-200">NLP, intent recognition, LLM integration, and contextual understanding</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
                  <Zap className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Action Execution</h3>
                  <p className="text-blue-200">System control, automation, and intelligent task completion</p>
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Implementation Roadmap</h3>
              <div className="space-y-4">
                {implementationSteps.map((item) => (
                  <div key={item.step} className="flex gap-4 items-start bg-slate-800/30 p-4 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-300">{item.title}</h4>
                      <p className="text-blue-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Languages & Tools */}
        {activeSection === 'languages' && (
          <div className="space-y-8">
            <div className="gradient-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
                <Code className="w-8 h-8" />
                Programming Languages, Frameworks & Tools
              </h2>
              <div className="space-y-8">
                {languagesData.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">{category.category}</h3>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <div key={item.name} className="bg-slate-800/50 p-5 rounded-lg border border-blue-500/20">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-bold text-blue-200">{item.name}</h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              item.level === 'Essential' ? 'bg-green-500/20 text-green-300' :
                              item.level === 'Recommended' ? 'bg-blue-500/20 text-blue-300' :
                              'bg-gray-500/20 text-gray-300'
                            }`}>
                              {item.level}
                            </span>
                          </div>
                          <p className="text-blue-100">{item.use}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="gradient-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Start Setup</h3>
              <div className="bg-slate-800 p-6 rounded-lg font-mono text-sm text-green-400 overflow-x-auto">
                <div className="space-y-2">
                  <div># Install Python dependencies</div>
                  <div>pip install torch transformers openai-whisper TTS</div>
                  <div>pip install spacy langchain fastapi</div>
                  <div>pip install pyaudio sounddevice pvporcupine</div>
                  <div className="mt-4"># Install Node.js dependencies</div>
                  <div>npm install -g electron</div>
                  <div>npm install @langchain/openai @anthropic-ai/sdk</div>
                  <div className="mt-4"># Optional: Local LLM setup</div>
                  <div>curl https://ollama.ai/install.sh | sh</div>
                  <div>ollama pull llama2</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Architecture */}
        {activeSection === 'architecture' && (
          <div className="space-y-8">
            <div className="gradient-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
                <Cpu className="w-8 h-8" />
                System Architecture
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                A well-designed architecture ensures modularity, scalability, and maintainability. Here's the layered approach:
              </p>
              <div className="space-y-6">
                {architectureComponents.map((layer, idx) => (
                  <div key={layer.layer} className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">{layer.layer}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {layer.components.map((comp) => (
                        <div key={comp.name} className="bg-slate-900/50 p-4 rounded border border-blue-500/20">
                          <h4 className="font-bold text-blue-200 mb-2">{comp.name}</h4>
                          <p className="text-sm text-blue-100">{comp.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="gradient-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Data Flow Example</h3>
              <div className="bg-slate-800 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">1</div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-300">User says: "Hey Jarvis, what's on my calendar today?"</div>
                      <div className="text-sm text-blue-200">Wake word detector activates → Audio captured</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">2</div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-300">Speech-to-Text Conversion</div>
                      <div className="text-sm text-blue-200">Whisper model transcribes audio to text</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">3</div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-300">Intent Recognition & Entity Extraction</div>
                      <div className="text-sm text-blue-200">Intent: "query_calendar", Entity: "today"</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">4</div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-300">LLM Processing & Context</div>
                      <div className="text-sm text-blue-200">LLM understands context, generates calendar query</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">5</div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-300">Action Execution</div>
                      <div className="text-sm text-blue-200">Calendar API called, events retrieved</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">6</div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-300">Response Generation</div>
                      <div className="text-sm text-blue-200">LLM formats natural response: "You have 3 meetings..."</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">7</div>
                    <div className="flex-1">
                      <div className="font-bold text-blue-300">Text-to-Speech Output</div>
                      <div className="text-sm text-blue-200">TTS engine speaks response to user</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NLP & ML */}
        {activeSection === 'nlp' && (
          <div className="space-y-8">
            <div className="gradient-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
                <Brain className="w-8 h-8" />
                Natural Language Processing & Machine Learning
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">Core NLP Components</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 p-5 rounded-lg">
                      <h4 className="text-xl font-bold text-blue-200 mb-2">1. Intent Classification</h4>
                      <p className="text-blue-100 mb-3">Determines what the user wants to accomplish</p>
                      <div className="bg-slate-900 p-4 rounded font-mono text-sm text-green-400">
                        <div># Example using transformers</div>
                        <div>from transformers import pipeline</div>
                        <div>classifier = pipeline("zero-shot-classification")</div>
                        <div>result = classifier("Set alarm for 7am", </div>
                        <div>&nbsp;&nbsp;candidate_labels=["set_alarm", "query_time", "play_music"])</div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 p-5 rounded-lg">
                      <h4 className="text-xl font-bold text-blue-200 mb-2">2. Named Entity Recognition (NER)</h4>
                      <p className="text-blue-100 mb-3">Extracts specific information like dates, times, names, locations</p>
                      <div className="bg-slate-900 p-4 rounded font-mono text-sm text-green-400">
                        <div># Using spaCy</div>
                        <div>import spacy</div>
                        <div>nlp = spacy.load("en_core_web_trf")</div>
                        <div>doc = nlp("Schedule meeting with John tomorrow at 3pm")</div>
                        <div>entities = [(ent.text, ent.label_) for ent in doc.ents]</div>
                        <div># Output: [("John", "PERSON"), ("tomorrow", "DATE"), ("3pm", "TIME")]</div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 p-5 rounded-lg">
                      <h4 className="text-xl font-bold text-blue-200 mb-2">3. Sentiment Analysis</h4>
                      <p className="text-blue-100 mb-3">Understands user emotions to adjust response tone</p>
                      <div className="bg-slate-900 p-4 rounded font-mono text-sm text-green-400">
                        <div>from transformers import AutoModelForSequenceClassification, AutoTokenizer</div>
                        <div>model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased-finetuned-sst-2-english")</div>
                        <div>tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased-finetuned-sst-2-english")</div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 p-5 rounded-lg">
                      <h4 className="text-xl font-bold text-blue-200 mb-2">4. Context Management</h4>
                      <p className="text-blue-100 mb-3">Maintains conversation history for multi-turn dialogues</p>
                      <div className="bg-slate-900 p-4 rounded font-mono text-sm text-green-400">
                        <div>class ContextManager:</div>
                        <div>&nbsp;&nbsp;def __init__(self, max_history=10):</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;self.history = []</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;self.entities = {'{}'}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;self.current_topic = None</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">LLM Integration Strategies</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-5 rounded-lg border border-green-500/30">
                      <h4 className="text-xl font-bold text-green-300 mb-2">Cloud-Based (Recommended for beginners)</h4>
                      <ul className="space-y-2 text-blue-100">
                        <li>✓ OpenAI GPT-4 / GPT-3.5-turbo</li>
                        <li>✓ Anthropic Claude (Sonnet/Opus)</li>
                        <li>✓ Google Gemini</li>
                        <li>✓ Pros: Powerful, no GPU needed, easy setup</li>
                        <li>✗ Cons: Requires internet, API costs, privacy concerns</li>
                      </ul>
                    </div>
                    <div className="bg-slate-800/50 p-5 rounded-lg border border-blue-500/30">
                      <h4 className="text-xl font-bold text-blue-300 mb-2">Local Models (Privacy-focused)</h4>
                      <ul className="space-y-2 text-blue-100">
                        <li>✓ Llama 2/3 (via Ollama)</li>
                        <li>✓ Mistral 7B</li>
                        <li>✓ Phi-2 (efficient for laptops)</li>
                        <li>✓ Pros: Private, offline, no recurring costs</li>
                        <li>✗ Cons: Requires GPU, slower, less capable</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-300">RAG (Retrieval-Augmented Generation)</h3>
                  <p className="text-blue-100 mb-4">
                    Enhance your assistant with personal knowledge by indexing your documents, emails, notes:
                  </p>
                  <div className="bg-slate-900 p-4 rounded font-mono text-sm text-green-400 overflow-x-auto">
                    <div># Setup vector database with ChromaDB</div>
                    <div>from langchain.vectorstores import Chroma</div>
                    <div>from langchain.embeddings import OpenAIEmbeddings</div>
                    <div>from langchain.text_splitter import RecursiveCharacterTextSplitter</div>
                    <div className="mt-2"># Index your documents</div>
                    <div>embeddings = OpenAIEmbeddings()</div>
                    <div>vectorstore = Chroma(persist_directory="./data", embedding_function=embeddings)</div>
                    <div className="mt-2"># Query relevant context</div>
                    <div>relevant_docs = vectorstore.similarity_search("What was my meeting about yesterday?")</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hardware */}
        {activeSection === 'hardware' && (
          <div className="space-y-8">
            <div className="gradient-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
                <Monitor className="w-8 h-8" />
                Hardware Requirements & Optimization
              </h2>

              <div className="space-y-6">
                {hardwareSpecs.map((tier) => (
                  <div key={tier.tier} className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">{tier.tier}</h3>
                    <ul className="space-y-2">
                      {tier.specs.map((spec, idx) => (
                        <li key={idx} className="text-blue-100 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-300">GPU Importance</h3>
                  <p className="text-blue-100 mb-3">
                    A GPU dramatically accelerates:
                  </p>
                  <ul className="space-y-2 text-blue-100">
                    <li>• LLM inference (10-100x faster)</li>
                    <li>• Speech recognition processing</li>
                    <li>• Real-time voice synthesis</li>
                    <li>• Running multiple models simultaneously</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-500/20 rounded text-sm text-blue-200">
                    <strong>Rule of thumb:</strong> 1GB VRAM per 1B model parameters (with quantization)
                  </div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-300">Audio Hardware</h3>
                  <p className="text-blue-100 mb-3">
                    Quality microphone significantly improves accuracy:
                  </p>
                  <ul className="space-y-2 text-blue-100">
                    <li>• <strong>Budget:</strong> Laptop built-in (70-80% accuracy)</li>
                    <li>• <strong>Good:</strong> USB mic like Blue Yeti (85-90%)</li>
                    <li>• <strong>Best:</strong> XLR mic + interface (95%+)</li>
                    <li>• Consider array microphones for better noise cancellation</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Performance Optimization Techniques</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-2">Model Quantization</h4>
                    <p className="text-sm text-blue-100">Reduce model size from FP32 to INT8 (4x smaller, minimal accuracy loss)</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-2">Batch Processing</h4>
                    <p className="text-sm text-blue-100">Process multiple requests together for better GPU utilization</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-2">Model Caching</h4>
                    <p className="text-sm text-blue-100">Keep models loaded in memory to avoid reload latency</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-2">Response Streaming</h4>
                    <p className="text-sm text-blue-100">Stream LLM output token-by-token for perceived faster response</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-2">Async Processing</h4>
                    <p className="text-sm text-blue-100">Non-blocking operations for better resource management</p>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-2">Smart Caching</h4>
                    <p className="text-sm text-blue-100">Cache frequent queries and responses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Challenges */}
        {activeSection === 'challenges' && (
          <div className="space-y-8">
            <div className="gradient-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
                <AlertCircle className="w-8 h-8" />
                Common Challenges & Solutions
              </h2>

              <div className="space-y-4">
                {challenges.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-yellow-500">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-yellow-300">{item.challenge}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.difficulty === 'High' ? 'bg-red-500/20 text-red-300' :
                        item.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {item.difficulty}
                      </span>
                    </div>
                    <p className="text-blue-100"><strong className="text-blue-300">Solution:</strong> {item.solution}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Development Best Practices</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-bold text-blue-200">Architecture</h4>
                    <ul className="space-y-1 text-sm text-blue-100">
                      <li>• Use microservices for modularity</li>
                      <li>• Implement event-driven architecture</li>
                      <li>• Design for extensibility (plugin system)</li>
                      <li>• Abstract platform-specific code</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-blue-200">Error Handling</h4>
                    <ul className="space-y-1 text-sm text-blue-100">
                      <li>• Graceful degradation (fallback to cloud if local fails)</li>
                      <li>• Comprehensive logging</li>
                      <li>• User-friendly error messages</li>
                      <li>• Automatic recovery mechanisms</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-blue-200">Security</h4>
                    <ul className="space-y-1 text-sm text-blue-100">
                      <li>• Encrypt sensitive data at rest</li>
                      <li>• Secure API key storage (env variables)</li>
                      <li>• Implement permission systems</li>
                      <li>• Regular security audits</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-blue-200">Performance</h4>
                    <ul className="space-y-1 text-sm text-blue-100">
                      <li>• Profile regularly to find bottlenecks</li>
                      <li>• Optimize hot paths</li>
                      <li>• Monitor resource usage</li>
                      <li>• Set performance budgets (e.g., &lt;2s response)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testing */}
        {activeSection === 'testing' && (
          <div className="space-y-8">
            <div className="gradient-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                Testing & Performance Improvement
              </h2>

              <div className="space-y-6">
                {testingStrategies.map((phase) => (
                  <div key={phase.phase} className="bg-slate-800/50 rounded-lg p-6 border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold mb-2 text-green-300">{phase.phase}</h3>
                    <p className="text-blue-200 mb-4 italic">Focus: {phase.focus}</p>
                    <ul className="space-y-2">
                      {phase.methods.map((method, idx) => (
                        <li key={idx} className="text-blue-100 flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Key Performance Metrics</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-400 mb-1">&lt;2s</div>
                    <div className="text-sm text-blue-200">Response Latency</div>
                    <div className="text-xs text-blue-300 mt-2">Time from user input to assistant response</div>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-400 mb-1">&gt;90%</div>
                    <div className="text-sm text-blue-200">Intent Accuracy</div>
                    <div className="text-xs text-blue-300 mt-2">Correct interpretation of user requests</div>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-400 mb-1">&lt;500MB</div>
                    <div className="text-sm text-blue-200">Memory Usage</div>
                    <div className="text-xs text-blue-300 mt-2">RAM consumption during idle/active states</div>
                  </div>
                  <div className="bg-slate-900/50 p-4 rounded border border-blue-500/20">
                    <div className="text-2xl font-bold text-blue-400 mb-1">&lt;5%</div>
                    <div className="text-sm text-blue-200">CPU Usage (Idle)</div>
                    <div className="text-xs text-blue-300 mt-2">Background resource consumption</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Continuous Improvement Strategies</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-blue-200">Collect User Feedback</h4>
                      <p className="text-sm text-blue-100">Implement thumbs up/down on responses, track failed requests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-blue-200">Analyze Usage Patterns</h4>
                      <p className="text-sm text-blue-100">Identify most common intents, time of day patterns, frequently accessed features</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-blue-200">Fine-tune Models</h4>
                      <p className="text-sm text-blue-100">Retrain on collected interaction data, improve domain-specific understanding</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-bold text-blue-200">A/B Testing</h4>
                      <p className="text-sm text-blue-100">Test different prompts, response styles, model parameters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">5</div>
                    <div>
                      <h4 className="font-bold text-blue-200">Performance Monitoring</h4>
                      <p className="text-sm text-blue-100">Set up dashboards to track latency, accuracy, error rates over time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Customization */}
        {activeSection === 'customization' && (
          <div className="space-y-8">
            <div className="gradient-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
                <Settings className="w-8 h-8" />
                Customization & Personalization
              </h2>

              <p className="text-blue-100 text-lg mb-8">
                A truly intelligent assistant adapts to individual user preferences, learns from interactions,
                and provides personalized experiences. Here's how to build customization into your system:
              </p>

              <div className="space-y-6">
                {customizationOptions.map((category) => (
                  <div key={category.category} className="bg-slate-800/50 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">{category.category}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {category.options.map((option, idx) => (
                        <div key={idx} className="flex items-start gap-2 bg-slate-900/50 p-3 rounded">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-blue-100">{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Implementation Example: User Preferences System</h3>
                <div className="bg-slate-900 p-4 rounded font-mono text-sm text-green-400 overflow-x-auto">
                  <div># user_preferences.py</div>
                  <div>class UserPreferences:</div>
                  <div>&nbsp;&nbsp;def __init__(self, user_id):</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;self.user_id = user_id</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;self.preferences = self.load_preferences()</div>
                  <div className="mt-2">&nbsp;&nbsp;def learn_from_interaction(self, intent, feedback):</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;"""Adjust preferences based on user feedback"""</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;if feedback == 'positive':</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.preferences['preferred_intents'][intent] += 1</div>
                  <div className="mt-2">&nbsp;&nbsp;def get_personalized_response_style(self):</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;"""Return response style based on user preference"""</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;return self.preferences.get('response_style', 'balanced')</div>
                  <div className="mt-2">&nbsp;&nbsp;def suggest_proactive_actions(self, current_context):</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;"""Suggest actions based on learned patterns"""</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;# E.g., "It's 9am, want me to summarize your emails?"</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;pass</div>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/30">
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Advanced: Adaptive Learning</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Track which commands users issue most frequently</li>
                    <li>• Learn optimal times for proactive suggestions</li>
                    <li>• Adapt response verbosity based on user reactions</li>
                    <li>• Remember contextual preferences (e.g., preferred music genre)</li>
                    <li>• Adjust wake word sensitivity based on false positive rate</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/30">
                  <h3 className="text-xl font-bold mb-4 text-blue-300">Privacy-Conscious Personalization</h3>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Store all preference data locally</li>
                    <li>• Implement data export/deletion features</li>
                    <li>• Allow users to disable learning features</li>
                    <li>• Provide transparency into what data is stored</li>
                    <li>• Option to reset all personalization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Demo */}
        {activeSection === 'demo' && (
          <div className="space-y-8">
            <div className="gradient-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6 gradient-text flex items-center gap-3">
                <Terminal className="w-8 h-8" />
                Interactive Demo
              </h2>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-6">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <button
                      onClick={() => setVoiceDemo(!voiceDemo)}
                      className={`p-6 rounded-full transition-all ${
                        voiceDemo
                          ? 'bg-blue-500 glow animate-pulse'
                          : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                    >
                      <Mic className={`w-12 h-12 ${voiceDemo ? 'text-white' : 'text-blue-400'}`} />
                    </button>
                  </div>
                  <p className="text-blue-200">
                    {voiceDemo ? 'Listening... (Demo Mode)' : 'Click microphone to simulate voice interaction'}
                  </p>
                </div>

                {voiceDemo && (
                  <div className="space-y-4 mt-6">
                    <div className="bg-slate-900 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="text-sm text-blue-300 mb-1">User:</div>
                      <div className="text-blue-100">"Hey Jarvis, what's the weather like today?"</div>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-lg border-l-4 border-green-500">
                      <div className="text-sm text-green-300 mb-1">JARVIS (Processing):</div>
                      <div className="text-blue-100 text-sm space-y-1">
                        <div>✓ Wake word detected</div>
                        <div>✓ Speech-to-text: "what's the weather like today"</div>
                        <div>✓ Intent: query_weather</div>
                        <div>✓ Entities: [date: "today"]</div>
                        <div>✓ Fetching weather data...</div>
                        <div>✓ Generating response</div>
                      </div>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-lg border-l-4 border-purple-500">
                      <div className="text-sm text-purple-300 mb-1">JARVIS (Response):</div>
                      <div className="text-blue-100">"Today in your location, it's partly cloudy with a high of 72°F and a low of 58°F. There's a 20% chance of rain in the evening. Would you like me to set a reminder to bring an umbrella?"</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-300">Example Commands to Try</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-slate-900/50 p-3 rounded">"Set an alarm for 7am tomorrow"</div>
                    <div className="bg-slate-900/50 p-3 rounded">"Summarize my emails from today"</div>
                    <div className="bg-slate-900/50 p-3 rounded">"Open Spotify and play jazz music"</div>
                    <div className="bg-slate-900/50 p-3 rounded">"What's on my calendar this week?"</div>
                    <div className="bg-slate-900/50 p-3 rounded">"Turn off all the lights in the living room"</div>
                    <div className="bg-slate-900/50 p-3 rounded">"Remind me to call mom in 2 hours"</div>
                    <div className="bg-slate-900/50 p-3 rounded">"What's the latest news on AI?"</div>
                    <div className="bg-slate-900/50 p-3 rounded">"Create a note: grocery list"</div>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-blue-300">Advanced Features Demo</h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-slate-900/50 p-3 rounded">
                      <div className="font-bold text-blue-200 mb-1">Context Awareness:</div>
                      <div className="text-blue-100">"What about tomorrow?" (remembers previous weather query)</div>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded">
                      <div className="font-bold text-blue-200 mb-1">Multi-step Tasks:</div>
                      <div className="text-blue-100">"Plan my morning routine: check weather, read news, make coffee"</div>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded">
                      <div className="font-bold text-blue-200 mb-1">Proactive Suggestions:</div>
                      <div className="text-blue-100">"Your meeting starts in 15 minutes. Should I prepare your notes?"</div>
                    </div>
                    <div className="bg-slate-900/50 p-3 rounded">
                      <div className="font-bold text-blue-200 mb-1">Learning:</div>
                      <div className="text-blue-100">"I noticed you always check stocks at 9am. Want me to do this automatically?"</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-blue-500/30">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Ready to Build?</h3>
                <p className="text-blue-100 mb-4">
                  Follow the implementation roadmap in the Overview section, refer to the detailed technical guides
                  in each section, and start with a basic voice-to-action pipeline. Gradually add intelligence,
                  context awareness, and personalization as you iterate.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all glow">
                    Download Starter Template
                  </button>
                  <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-blue-200 rounded-lg font-medium transition-all">
                    View Example Code
                  </button>
                  <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-blue-200 rounded-lg font-medium transition-all">
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-blue-300 text-sm">
        <p>Built with Next.js, React, and Tailwind CSS | Open Source Guide for AI Assistant Development</p>
      </div>
    </div>
  );
}
