import { css } from '@emotion/react';
import { Card } from 'components/card';
import Image from 'next/image';
import { useState } from 'react';

interface PreviewProps {
  images: (string | null)[];
}

export const Preview = (props: PreviewProps): JSX.Element => {
  const [preview, setPreview] = useState<string | null>(props.images[2]);

  return (
    <div data-testid="preview-image">
      <Card classname='cursor-default' css={{ textAlign: 'center' }}>
        <Image
          src={preview || ''}
          width={200}
          height={200}
          objectFit='contain'
          alt={preview || 'pokemon'}
          quality={100}
          objectPosition='center'
        />
      </Card>
      <div
        css={css({
          display: 'grid',
          gridTemplateColumns: 'auto auto auto auto',
          gap: '0.5rem',
          marginTop: '1rem'
        })}
        data-testid="preview-options"
      >
        {[props.images[2], props.images[0], props.images[3], props.images[1]].map((img, idx) => (
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
              src={img || ''}
              width={60}
              height={60}
              objectFit='contain'
              alt={img || 'pokemon'}
              quality={100}
              onClick={() => setPreview(img)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

