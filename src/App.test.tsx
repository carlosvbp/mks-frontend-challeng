import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import App from "./App"

//App está renderizando.

describe("App", () => {
    test("App está renderizando?", () => {
        const { debug } = render(<App />)
        debug()
    })
})


//Está renderizando produtos corretamente?

describe("ProductCard", () => {
    test("Está renderizando produtos corretamente?", () => {
        const product = {
            id: {
                type: "number"
            },
            name: {
                type: "string"
            },
            brand: {
                type: "string"
            },
            description: {
                type: "string"
            },
            price: {
                type: "string"
            },
            photo: {
                type: "string"
            },
            count: {
                type: "number"
            }
        }
    })
})