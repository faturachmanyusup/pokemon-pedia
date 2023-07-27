import { SITE_URL } from 'config/variable';
import { client } from 'gpql';
import { GET_POKEMON } from 'gpql/query';

const lastmod = '2023-07-27';

function generateSiteMap(pokemons) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${SITE_URL}</loc>
       <lastmod>${lastmod}</lastmod>
       <changefreq>yearly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${SITE_URL}/pokemon</loc>
       <lastmod>${lastmod}</lastmod>
       <changefreq>yearly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${SITE_URL}/my-pokemon</loc>
       <lastmod>${lastmod}</lastmod>
       <changefreq>yearly</changefreq>
       <priority>0.5</priority>
     </url>
     ${pokemons.map(({ name }) => {
    return `
      <url>
        <loc>${`${SITE_URL}/pokemon/${name}`}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>0.5</priority>
      </url>
     `;
  }).join('')}
   </urlset>
 `;
}

function SiteMap() {
  // do nothing
}

export async function getServerSideProps({ res }) {
  try {
    const response = await client.query({
      query: GET_POKEMON,
      variables: {
        limit: 1281,
        offset: 1
      }
    });

    const pokemons = response.data.pokemons.results;
    const sitemap = generateSiteMap(pokemons);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default SiteMap;