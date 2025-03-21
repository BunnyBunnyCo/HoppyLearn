
export interface HeaderProps {  
  navButtons: React.ReactElement<NavButtonProps>[];
}

export interface NavButtonProps {
  icon: string;
  text: string;
  alt: string;
  destination: string;
}

