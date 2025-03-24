import cn from "classnames";

type Props = {
  ref?: React.Ref<HTMLDivElement>;
  img?: string;
  titel: string;
  text: string;
  ltr?: boolean;
};

export const TextImageBox = ({ ref, img, titel, text, ltr }: Props) => {
  const classes = cn(
    "flex flex-col md:flex-row items-center justify-center py-5 md:py-10 px-10 md:px-20 2xl:px-90 gap-10 bg-gray-100",
    {
      "md:flex-row-reverse": ltr,
    }
  );

  return (
    <div ref={ref} className={classes}>
      {img && (
        <div>
          <div className="w-48 h-48 overflow-hidden rounded-full">
            <img src={img} alt="img" className="object-cover w-full h-full" />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <p className="text-4xl font-serif ">{titel}</p>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};
