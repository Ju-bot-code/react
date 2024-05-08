import { ReactNode, useState } from "react";

interface Prop {
  count: number;
  showAll: () => void;
  children: ReactNode;
}
export default function ExpandableText({ count, showAll, children }: Prop) {
  let [showText, setShowText] = useState(true);
  let text = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
    magnam sint minus obcaecati autem optio, veniam libero dolores ut est
    repudiandae minima consequuntur inventore reprehenderit rem corporis ex
    illum! Id doloribus rem eum fugit non deleniti numquam amet rerum quia a
    magnam repellat officia sapiente ea, ullam sint laborum ad ipsam dolores
    animi necessitatibus sequi praesentium, labore voluptatibus? Ullam in
    ipsam delectus laboriosam animi nobis, eligendi alias quidem nihil,
    dolorem dolor qui, earum tempore est commodi incidunt ad ab architecto
    magni quia et! Harum officiis sapiente soluta, aliquam aperiam ex
    laborum nemo accusamus commodi saepe illo provident inventore fugit
    molestiae vero suscipit. Amet, nostrum tempora? Illum reiciendis,
    voluptatem maxime animi at odit ad, explicabo facilis sed consequuntur,
    ea hic iusto esse ex sapiente accusamus. Adipisci, nesciunt? Dolorum
    tempore nam necessitatibus animi ducimus, error consequuntur id saepe
    neque pariatur officia eius in repellat eum officiis illum vitae
    accusantium vel, sunt ad? Dolorem aspernatur libero aliquid esse,
    doloremque, suscipit vero omnis inventore voluptates obcaecati, autem
    deserunt aut officiis nisi recusandae quasi quisquam itaque maxime
    cumque ad. Repudiandae nemo tempore, maiores in accusamus cum
    consequuntur officiis minima esse rem commodi placeat sequi dicta,
    consectetur vel est quibusdam sapiente rerum aperiam ullam perspiciatis
    tenetur.`;
  return (
    <div className="  ">
      {children}
      <p>{count ? text.slice(0, count) : text}</p>
      <button
        onClick={showAll}
        className="border-2 my-1 rounded border-black  p-1"
      >
        Show {count ? "more" : "less"}{" "}
      </button>
      <hr className="border-2" />
    </div>
  );
}
