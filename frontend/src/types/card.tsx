export interface InputCard {
  front: string;
  back: string;
}
export function createInputCard(): InputCard {
  return {
    front: "",
    back: "",
  };
}

export interface Card {
  id: number;
  front: string;
  back: string;
}
