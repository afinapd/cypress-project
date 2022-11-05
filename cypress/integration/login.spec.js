import { LoginPage } from "../pages/login.page"

const loginPage = new LoginPage()

describe('Login Page', () => {
    it('should be able to login using valid credential', () => {
        loginPage.navigate('https://trytestingthis.netlify.app/')
        loginPage.enterUsername('test')
        loginPage.enterPassword('test')
        loginPage.clickLogin()
    })
})
