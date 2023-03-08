export enum OptionsEnum {
  scissor = 'scissor',
  rock = 'rock',
  paper = 'paper',
}

export type Options = keyof typeof OptionsEnum | null;
