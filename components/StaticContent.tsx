/**
 * Trusted, first-party editorial markup from /content/pages.ts. 
 * Never interpolate user input or third-party content into html.
 * The original design is retained while individual sections are progressively migrated to JSX.
 */
export function StaticContent({html}: {html:string}) {
  return <div dangerouslySetInnerHTML={{__html: html}}/>;
}
