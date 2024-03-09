import parseHtmlStringToHtml, { domToReact } from 'html-react-parser';
import { useMemo } from 'react';

export const HTMLRenderer = ({ htmlString }: { htmlString: string }) => {

  const parsedElement = useMemo(() => {

    return parseHtmlStringToHtml(htmlString, {

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transform: (reactNode: any, domNode: any) => {
        if (reactNode && reactNode.type === 'ol') {
          const dToReact: any = domToReact(domNode.children);

          if (Array.isArray(dToReact)) {
            return (
              <ol className='list-decimal pl-5'>
                {
                  dToReact.map((item, index) => {
                    if (!item.props.children) return null;
                    return (
                      <li key={index}>
                        {item.props.children}
                      </li>
                    )
                  }
                  )
                }
              </ol>
            )
          }
          else {

            return (
              <ol className='list-decimal pl-5'>
                <li >
                  {dToReact.props.children}
                </li>
              </ol>
            )
          }

        }
        else if (reactNode && reactNode.type) {
          return (
            <>
              {reactNode && domToReact(domNode.children)}
            </>
          )
        }
      },
    });
  }, [htmlString]);
  return <div className='whitespace-normal'>{parsedElement}</div>;
};

