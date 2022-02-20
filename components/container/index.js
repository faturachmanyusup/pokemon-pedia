import { mq } from "styles/emotion";

export function Container({
  children,
  display = 'block',
  gap = '0',
  direction = ['column', 'column', 'row'],
  dataTestId = ''
}) {
  return (
    <div
      data-testid={dataTestId}
      id="app-container"
      css={mq({
        width: "100%",
        margin: "0 auto",
        minHeight: "105vh",
        bgColor: 'red',
        maxWidth: [480, 680, 720, 1020, 1260],
        padding: '2rem 1rem 0',
        paddingBottom: ['1rem', '1rem', '2rem'],
        display: display,
        flexDirection: direction,
        gap: gap,
      })}
    >
      {children}
    </div>
  );
}

export function ContainerList({ children, css }) {
  return (
    <div
      css={mq({
        display: 'grid',
        gridTemplateColumns: [
          'auto',
          '31% 31% 31%',
          '31% 31% 31%',
          '22% 22% 22% 22%',
          '17% 17% 17% 17% 17%'
        ],
        gap: [
          '2rem 4%',
          '2rem 4%',
          '2rem 2rem',
          '2.5rem 4%',
          '2.5rem 3.8%',
        ],
        paddingBottom: '2rem',
        ...css
      })}
    >
      {children}
    </div>
  )
}