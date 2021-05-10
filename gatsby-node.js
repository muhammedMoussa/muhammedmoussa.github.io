const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql
    (`
        query {
            allMdx {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    // Create blog post pages.
    const posts = result.data.allMdx.edges
    console.log(posts.length, '----------------------------')
    posts.forEach(({ node }, index) => {
        if(node.slug) {
            createPage({
                path: `blog/${node.slug}`,
                component: path.resolve(`./src/templates/post-page-template.js`),
                context: { id: node.id },
            })
        }

    })
}