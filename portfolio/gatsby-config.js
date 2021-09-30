module.exports = {
  siteMetadata: {
    title: `KateSawada's Portfolio`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected:true,        // 削除されたCSSの容量を表示 
        printRejected: false,  // 削除したCSSを最大100個まで一覧表示
        printAll: false,       // 削除したCSSを全て一覧表示 
        develop: false,        // 開発環境でbuildした時もCSSを削除
        tailwind: true,       // TailwindCSS使用時はTrue default: false
        whitelist: ['selector'], // 削除しないCSSを指定 default: []
        ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // 削除しないファイルを指定 default: []
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // 指定したファイルのCSSのみを削除 default: []
      }
    },
  ],
}
