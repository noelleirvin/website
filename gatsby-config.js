require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Noelle Irvin',
    description: 'I am a software engineer and web developer. I enjoy designing and developing websites for small businesses.'
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    `gatsby-plugin-smoothscroll`,
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Noelle Irvin`,
        short_name: `Noelle`,
        description: `I am a software engineer and web developer. I enjoy designing and developing websites for small businesses.`,
        start_url: `/`,
        lang: `en`,
        background_color: `#F7CAC9`,
        theme_color: `#F7CAC9`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
  ],
}
