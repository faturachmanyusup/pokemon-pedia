import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { mq } from "styles/emotion";
import { Context } from "store";

export default function Header() {
  const { myPokemon } = useContext(Context);

  return (
    <header
      css={css({
        boxShadow: '0 2px 1px 1px rgba(0, 0, 0, 0.1)',
        height: '4rem',
        position: 'sticky',
        top: 0,
        backgroundColor: 'white',
        zIndex: 10
      })}
    >
      <div
        css={mq({
          maxWidth: [480, 680, 720, 1020, 1260],
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '0 auto',
          padding: '1rem .5rem',
          alignItems: 'center'
        })}
      >
        <Link href="/pokemon" passHref>
          <nav className="flex-row align-items-center cursor-pointer">
            <Image
              src="/assets/images/pokeball.png"
              width={40}
              height={40}
              alt="Pokemon Pedia"
              layout="fixed"
              objectFit="contain"
            />
            <h3 className="text-bold">Pokemon Pedia</h3>
          </nav>
        </Link>

        <Link href="/my-pokemon" passHref>
          <nav className="cursor-pointer">My Pokemon ({myPokemon.length})</nav>
        </Link>
      </div>
    </header>
  );
}