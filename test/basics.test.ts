import Button from "sap/m/Button"
import { wdi5Selector } from "../src/types/wdi5.types"
import {} from "../src/types/browser-commands"

describe("basics", async () => {
    it("should open a UI5-enabled site (here: DemoKit) supplied in wdio.conf's wdi5 setting", async () => {
        const title = await browser.getTitle()
        await expect(title).toEqual("OpenUI5 SDK - Demo Kit")
    })

    it("should find a ui5 control by id", async () => {
        const selectorDownloadButton: wdi5Selector = {
            selector: {
                id: "readMoreButton",
                controlType: "sap.m.Button",
                viewName: "sap.ui.documentation.sdk.view.Welcome"
            }
        }
        const controlDownloadButton: Button = await browser.asControl(selectorDownloadButton)
        expect(controlDownloadButton.getText()).toEqual("Download")
    })
})