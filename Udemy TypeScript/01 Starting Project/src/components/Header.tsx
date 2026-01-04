import { type ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}

//My solution:
// import { type PropsWithChildren } from "react";

// type ImageProps = {
//   src: string;
//   alt: string;
// };

// type HeaderProps = PropsWithChildren<{
//   image: ImageProps;
// }>;

// export default function Header({ image, children }: HeaderProps) {
//   return (
//     <header>
//       <div>
//         <img src={image.src} alt={image.alt} />
//         {children}
//       </div>
//     </header>
//   );
// }
