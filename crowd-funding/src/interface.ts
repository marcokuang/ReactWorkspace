export interface Card {
  title: string;
  price: number | null;
  description: string;
  inventory: number | null;
}

export interface ModalProps {
  isShown: boolean;
  toggleModal: Function;
}
