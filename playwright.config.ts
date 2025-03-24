import { defineConfig, devices } from '@playwright/test';

const PORT = 3000;

export default defineConfig({
    use: {
        baseURL: `http://127.0.0.1:${PORT}`,
        trace: 'on-first-retry'
    },
    webServer: {
        command: `npm run dev`,
        url: `http://127.0.0.1:${PORT}`
    },
    testDir: "e2e-tests",
    outputDir: 'e2e-results',
    projects: [
        {
            name: 'chromium desktop',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox desktop',
            use: { ...devices['Desktop Firefox'] }
        }
    ]

})
