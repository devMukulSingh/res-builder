import parseHtmlStringToHtml, { domToReact } from 'html-react-parser';
import Link from 'next/link';
import { useMemo } from 'react';

export const HTMLRenderer = ({ htmlString }: { htmlString: string }) => {

  const parsedElement = useMemo(() => {

    return parseHtmlStringToHtml(htmlString, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      replace: (domNode: any) => {
        console.log(domNode.parent);
        
        if (domNode.attribs && domNode.attribs.href && domNode.name === 'a') {
          return <Link href={domNode.attribs.href}>{domToReact(domNode.children)}</Link>;
        } 
        // else if(domNode.parent && domNode.parent?.name === 'li'){
        //     return <li>{domToReact(domNode.children)}</li>
        // }
        else if (domNode.name === 'script') {
          return <></>;
        }
      },
    });
  }, [htmlString]);
  return <div className={` text-xs `}>{parsedElement}</div>;
};