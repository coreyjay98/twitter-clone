interface SidebarButtons {
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
  active: boolean;
  onClick: () => void;
}

const SidebarButtons = ({ Icon, text, active, onClick }: SidebarButtons) => {
  return (
    <div
      className={`text-[#d9d9d9] hover:cursor-pointer flex items-center justify-center xl:justify-start text-xl
      space-x-3 hoverAnimation ${active && "font-bold"}`}
      onClick={() => onClick()}
    >
      <Icon className="h-7 hoverAnimation font-bold" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
};

export default SidebarButtons;
