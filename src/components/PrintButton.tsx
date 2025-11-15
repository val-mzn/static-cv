interface PrintButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
import clsx from "clsx";

export const PrintButton = ({ className }: PrintButtonProps) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className={clsx(
        "px-4 py-2 bg-slate-700 text-white rounded-lg shadow-lg hover:bg-slate-800 transition font-semibold",
        className
      )}
    >
      Print CV
    </button>
  );
};
