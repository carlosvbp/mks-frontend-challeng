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


