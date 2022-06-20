import express from "express"
import livroRoute from "./livrosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, resp) => {
        resp.status(200).json({ "titulo": "Curso de Node" })
    })

    app.use(
        express.json(), // for parsing application/json
        livroRoute
    )
}

export default routes;