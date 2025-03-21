
export interface HeaderProps {  
  navButtons: React.ReactElement<NavButtonProps>[];
  title: string;
}

export interface NavButtonProps {
  icon: string;
  text: string;
  alt: string;
  destination: string;
}

