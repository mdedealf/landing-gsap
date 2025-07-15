import cn from "clsx";

type ClipPathTitleProps = {
  title: string;
  color: string;
  bg: string;
  className: string;
  borderColor: string;
};

const ClipPathTitle = ({
  title,
  color,
  bg,
  className,
  borderColor,
}: ClipPathTitleProps) => {
  return (
    <div className="general-title">
      <div className="">
        <div
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            borderColor: borderColor,
          }}
          className={cn("border-[.5vs] text-nowrap opacity-0", className)}
        >
          <div
            className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
            style={{ backgroundColor: bg }}
          >
            <h2
              style={{
                color: color,
              }}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
