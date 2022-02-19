import { css } from '@emotion/react';
import { Card } from 'components/card';
import Image from 'next/image';
import { useState } from 'react';

export const Preview = (props) => {
  const [preview, setPreview] = useState(props.images[0]);

  return (
    <div>
      <Card classname='cursor-default' css={{ textAlign: 'center' }}>
        <Image
          src={preview}
          width='200%'
          height='200%'
          objectFit='contain'
          alt={preview}
          quality={100}
          objectPosition='center'
          layout='fixed'
        />
      </Card>
      <div
        css={css({
          display: 'grid',
          gridTemplateColumns: 'auto auto auto auto',
          gap: '0.5rem',
          marginTop: '1rem'
        })}
      >
        {props.images.map((img, idx) => (
          <Card
            key={idx}
            css={css({
              boxShadow: preview === img
                ? '0 0 3.5px 1px rgb(0, 0, 0, 0.50)'
                : '0 0 3.5px 1px rgb(0, 0, 0, 0.15)',
              textAlign: 'center'
            })}
          >
            <Image
              className='cursor-pointer'
              src={img}
              width='60%'
              height='60%'
              objectFit='contain'
              alt={img}
              quality={100}
              onClick={() => setPreview(img)}
              layout='fixed'
            />
          </Card>
        ))}
      </div>
    </div>
  )
}