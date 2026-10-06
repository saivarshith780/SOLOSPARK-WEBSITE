/**
 * Solo Spark: every piece of editable site content lives in this file.
 *
 * Contact details, booking link, form key, navigation, services, builds and FAQ
 * are all here. Change a value, rebuild, and every page picks it up.
 *
 * Search for "TODO" to find the values that still need filling in.
 */

export const site = {
  name: 'Solo Spark',
  legalName: 'Solo Spark LLC',
  url: 'https://mysolospark.com',
  tagline: 'AI agents and automations for small and mid-sized ops teams',
  description:
    'I build AI agents, workflow automations and LLM integrations that take repetitive manual work off small and mid-sized ops teams. Founder-led, fully remote.',
  locale: 'en_US',

  founder: {
    name: 'Sai Varshith Chinthalapally',
    firstName: 'Sai',
    title: 'Founder & CEO',
    role: 'AI automation engineer',
    specialty: 'n8n',
    education: 'MS in Data Science, NJIT',
    // TODO: save a square photo as public/images/sai.jpg. It replaces the
    // placeholder on the About page on the next build.
    headshot: '/images/sai.jpg',
  },

  location: {
    city: 'Columbus',
    region: 'Ohio',
    regionCode: 'OH',
    country: 'US',
    areaServed: 'United States',
  },

  contact: {
    email: 'saivarshith.chinthalaplly@mysolospark.com',
    phone: '+1 (862) 413-0780',
    phoneHref: 'tel:+18624130780',
  },

  // TODO: paste your Cal.com or Calendly link. While empty, every
  // "Book a free call" button goes to /contact instead.
  bookingUrl: '',

  // Web3Forms access key (https://web3forms.com). Public by design: it only
  // lets the form send to your inbox.
  web3formsKey: '638a1a76-fe76-42df-b2cf-539459043767',

  // TODO: add your public profile links (leave empty to hide).
  social: {
    linkedin: '',
    github: '',
  },

  call: {
    length: '15-minute',
    label: 'Book a free call',
  },

  pricing:
    'Pay as you go. We agree on scope before I start, and you pay for the work as it gets done.',
};

/** Where every "Book a free call" button points. */
export const bookingHref = site.bookingUrl || '/contact';
export const bookingIsExternal = Boolean(site.bookingUrl);

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const tools = [
  'n8n',
  'Python',
  'Node.js',
  'FastAPI',
  'PostgreSQL',
  'Claude API',
  'OpenAI API',
  'RAG',
  'MCP / tool calling',
  'Twilio',
];

export type UseCase = { title: string; body: string };
export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  outcome: string;
  useCases: UseCase[];
  tools: string[];
};

export const services: Service[] = [
  {
    slug: 'ai-agents',
    name: 'AI agents',
    short: 'Software that reads, decides and acts on routine requests, so your team handles the exceptions.',
    summary:
      'An AI agent reads an incoming request, checks it against your rules and data, and takes the next step. It can answer a call, sort an inbox, or pull the right file. Your team steps in when something needs a person.',
    outcome: 'Faster replies, including after hours.',
    useCases: [
      {
        title: 'AI phone agents',
        body: 'Answer calls, take orders or bookings, and log every call so your staff can check it later.',
      },
      {
        title: 'Support triage',
        body: 'Read each new ticket or email, tag it, draft a reply from your own help docs, and send urgent ones to the right person.',
      },
      {
        title: 'Lead intake and routing',
        body: 'Qualify new inquiries with a few questions and pass the good ones to sales with the details filled in.',
      },
    ],
    tools: ['Claude API', 'OpenAI API', 'RAG', 'MCP / tool calling', 'Twilio'],
  },
  {
    slug: 'workflow-automation',
    name: 'Workflow automation',
    short: 'The copy-paste between your tools, done for you on every record, every time.',
    summary:
      'Most ops work is moving information from one place to another. I connect the tools you already use so data moves on its own: from forms to your CRM, from email to a spreadsheet, from a spreadsheet to a weekly report.',
    outcome: 'Hours back each week and fewer typos.',
    useCases: [
      {
        title: 'Lead intake and routing',
        body: 'Every form fill lands in your CRM, gets assigned to the right person, and triggers a follow-up email.',
      },
      {
        title: 'Appointment reminders',
        body: 'Send texts or emails before each appointment and update the calendar when someone confirms or cancels.',
      },
      {
        title: 'Reporting',
        body: 'Pull numbers from your tools on a schedule and drop a finished report into email, Slack or a sheet.',
      },
    ],
    tools: ['n8n', 'Python', 'Node.js', 'PostgreSQL'],
  },
  {
    slug: 'llm-integrations',
    name: 'LLM integrations',
    short: 'Claude or OpenAI built into the systems you already run, working on your own documents.',
    summary:
      'Sometimes you need an AI step inside an existing process: read a PDF, pull out the fields, summarize a thread, write a first draft. I add that step to your current tools and keep a human check where it matters.',
    outcome: 'Less retyping and quicker first drafts.',
    useCases: [
      {
        title: 'Invoice and document processing',
        body: 'Read invoices, receipts or forms, pull out the fields you need, and file them in your system for review.',
      },
      {
        title: 'Answers from your own documents',
        body: 'Let staff ask questions in plain English and get answers drawn from your policies, manuals and past work.',
      },
      {
        title: 'Personalized drafts',
        body: 'Turn a record in your CRM or sheet into a tailored proposal, email or document, ready for a person to send.',
      },
    ],
    tools: ['Claude API', 'OpenAI API', 'RAG', 'FastAPI', 'Python'],
  },
];

export const steps = [
  {
    title: 'Quick intro call',
    body: `A free ${site.call.length} call. You tell me what eats your team's time, and I tell you honestly whether automation fits.`,
  },
  {
    title: 'Map one process',
    body: 'We pick one process and write down every step, tool and exception. You get a clear scope before any work starts.',
  },
  {
    title: 'I build it',
    body: 'I build the system on tools you own and test it with your real data. You see progress as it happens.',
  },
  {
    title: 'Hand-off and support',
    body: 'I walk your team through it in plain English, document how it works, and stay on hand to fix and extend it.',
  },
];

export type Build = {
  slug: string;
  name: string;
  status: string;
  summary: string;
  problem: string;
  built: string;
  how: string[];
  stack: string[];
  note?: string;
  alsoFits?: string[];
};

export const builds: Build[] = [
  {
    slug: 'ai-phone-ordering-agent',
    name: 'AI phone-ordering agent for a local Italian restaurant',
    status: 'Built, not launched',
    summary:
      'Customers call the restaurant and place their order by talking to an AI agent.',
    problem:
      'During a rush, phone orders pull staff away from the counter and the kitchen. Calls get missed, and orders taken in a hurry get written down wrong.',
    built:
      'A phone agent that answers the call, talks the customer through the menu, takes the order and confirms it back. Each call is saved as a session, so staff can see exactly what was ordered.',
    how: [
      'A customer calls the restaurant number. Twilio picks up the call.',
      'n8n passes the conversation to a Claude agent that knows the menu.',
      'The agent asks follow-up questions, builds the order and reads it back.',
      'Each call session and order is stored in Airtable for staff to check.',
    ],
    stack: ['Twilio', 'n8n', 'Claude agent', 'Airtable'],
    note:
      'An earlier full-stack version used Deepgram for speech-to-text, ElevenLabs for the voice, Stripe for payments, PostgreSQL with Prisma for data, and a Next.js admin dashboard. The system has not been launched.',
  },
  {
    slug: 'research-and-apply-pipeline',
    name: 'Research-and-apply pipeline in n8n',
    status: 'Reusable pattern',
    summary:
      'A pipeline that finds opportunities, scores each one, writes a tailored document for it and sends it out.',
    problem:
      'Applying for jobs well is slow. Each listing needs to be read, judged, and answered with its own tailored resume. Doing that by hand for dozens of listings takes days.',
    built:
      'An n8n pipeline that pulls job listings, has Claude score each one, writes a tailored resume for the good matches, exports it, logs everything and sends the emails.',
    how: [
      'Research: Apify pulls job listings from LinkedIn.',
      'Score: Claude rates how well each listing fits.',
      'Personalize: Claude writes a tailored resume for each match, exported to PDF with Gotenberg and to Word with python-docx.',
      'Send: every step is logged to Google Sheets, and emails go out through Gmail.',
    ],
    stack: ['n8n', 'Apify', 'Claude', 'Gotenberg', 'python-docx', 'Google Sheets', 'Gmail'],
    alsoFits: [
      'Staffing: match candidates to open roles and draft the submission.',
      'Sales proposals: score inbound leads and draft a tailored proposal.',
      'Outreach: research prospects and write a personal first email.',
    ],
  },
];

export const faq = [
  {
    q: 'What kind of work can you automate?',
    a: 'Work that follows the same steps most of the time. Moving data between tools, sorting emails or tickets, sending reminders, reading documents, building regular reports, and answering common calls or questions.',
  },
  {
    q: 'Do I need to be technical?',
    a: 'No. You explain how the work gets done today. I handle the technical side and explain the finished system in plain English.',
  },
  {
    q: 'How does pricing work?',
    a: `${site.pricing} We talk through it after the free intro call, once I know what you need.`,
  },
  {
    q: 'Who will I work with?',
    a: `Me, ${site.founder.name}. I'm the founder and the engineer, so the person you talk to is the person who builds your system.`,
  },
  {
    q: 'What if the AI gets something wrong?',
    a: 'I design each system around your rules, log what it does, and add a human check wherever a mistake would be costly. You decide where a person stays in the loop.',
  },
  {
    q: 'Do you work with businesses outside Ohio?',
    a: `Yes. I'm based in ${site.location.city}, ${site.location.region}, and work fully remote with clients across the US.`,
  },
  {
    q: 'What happens on the free call?',
    a: `It's a ${site.call.length} intro. You describe the work you want off your plate, I ask a few questions, and we decide together whether it's worth taking further.`,
  },
];
