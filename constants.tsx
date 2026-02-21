
import React from 'react';
import { Shield, Lock, Terminal, Cpu, Bug, Globe, Code2, Database } from 'lucide-react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NetSentinel AI',
    description: 'Autonomous network intrusion detection system using machine learning to identify zero-day exploits in real-time.',
    tags: ['Python', 'TensorFlow', 'Scapy', 'Zero-Day'],
    category: 'tool'
  },
  {
    id: '2',
    title: 'VulnScan Pro',
    description: 'Automated vulnerability assessment tool specialized in discovering SQL Injection and XSS in complex web applications.',
    tags: ['Go', 'Docker', 'Web Security'],
    category: 'tool'
  },
  {
    id: '3',
    title: 'Buffer Overflow Research',
    description: 'In-depth analysis of modern stack protection mechanisms and bypass techniques in Linux kernels.',
    tags: ['C', 'Assembly', 'Kernel', 'Exploit Dev'],
    category: 'research'
  },
  {
    id: '4',
    title: 'Encrypted Vault',
    description: 'A zero-knowledge password manager implementing AES-256-GCM with hardware-backed security modules.',
    tags: ['Rust', 'Cryptography', 'Privacy'],
    category: 'tool'
  }
];

export const SKILLS: Skill[] = [
  { 
    name: 'Python', 
    level: 95, 
    category: 'programming',
    description: 'Used for rapid exploit development, automation scripts, and machine learning models in threat detection.'
  },
  { 
    name: 'C / C++', 
    level: 85, 
    category: 'programming',
    description: 'Expertise in low-level systems programming, memory management, and identifying stack/heap-based vulnerabilities.'
  },
  { 
    name: 'Rust', 
    level: 80, 
    category: 'programming',
    description: 'Leveraging memory safety guarantees to build high-performance secure networking tools and encrypted storage.'
  },
  { 
    name: 'Penetration Testing', 
    level: 90, 
    category: 'security',
    description: 'Comprehensive security assessments across networks, web applications, and cloud infrastructures.'
  },
  { 
    name: 'Reverse Engineering', 
    level: 85, 
    category: 'security',
    description: 'Analyzing malware and compiled binaries using static and dynamic analysis to uncover hidden logic or vulnerabilities.'
  },
  { 
    name: 'Cryptography', 
    level: 80, 
    category: 'security',
    description: 'Implementation of standard cryptographic protocols (AES, RSA, ECC) and analysis of cryptographic primitives.'
  },
  { 
    name: 'Wireshark / Burp Suite', 
    level: 95, 
    category: 'tools',
    description: 'Expertise in packet inspection, protocol analysis, and intercepting/manipulating web traffic for security testing.'
  },
  { 
    name: 'Metasploit', 
    level: 85, 
    category: 'tools',
    description: 'Proficient in utilizing the framework for exploit verification and post-exploitation research.'
  },
  { 
    name: 'GDB / Ghidra', 
    level: 80, 
    category: 'tools',
    description: 'Advanced debugging and disassembly for analyzing binary behavior and crafting exploit payloads.'
  },
];

export const NAV_LINKS = [
  { label: 'Intelligence', href: '#hero' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Operations', href: '#projects' },
  { label: 'Audit Tool', href: '#auditor' },
  { label: 'Contact', href: '#contact' },
];
