export interface Slide {
  id: string;
  title: string;
  content: string[];
  visualType?: 'none' | 'cat' | 'double-slit' | 'turing' | 'bloch' | 'circuit' | 'search-analogy' | 'shor-visual' | 'code-editor' | 'biology-photo' | 'biology-bird' | 'hardware-chip' | 'hardware-ion';
  codeInitial?: string;
  codeLanguage?: string;
  visualProps?: Record<string, any>;
}

export interface Module {
  id: string;
  title: string;
  slides: Slide[];
}

export interface AppState {
  currentModuleIndex: number;
  currentSlideIndex: number;
  completedSlides: string[];
  viewMode: 'course' | 'code';
  arMode: boolean; // New AR toggle state
}

export interface CodeExample {
  id: string;
  category: string;
  title: string;
  description: string;
  code: string;
}

export enum GateType {
  H = 'H',
  X = 'X',
  Y = 'Y',
  Z = 'Z',
  S = 'S',
  T = 'T',
  CNOT = 'CNOT',
  SWAP = 'SWAP',
  MEASURE = 'M'
}