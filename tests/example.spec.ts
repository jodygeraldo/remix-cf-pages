import { expect, test } from '@playwright/test'

test('homepage has Remix in title', async ({
  page,
}) => {
  await page.goto('localhost:8788')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Remix/)
})
