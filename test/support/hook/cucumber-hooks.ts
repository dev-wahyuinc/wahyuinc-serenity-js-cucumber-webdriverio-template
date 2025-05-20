import { Before, setDefaultTimeout } from '@cucumber/cucumber';

/**
 * Clear localStorage and sessionStorage after each scenario
 * This helps ensure a clean browser state between test scenarios
 */

const timeoutInSecond = 20;
setDefaultTimeout(timeoutInSecond * 1000);

Before(
    {
        tags: '@slow',
        name: 'Set Default Time Out.',
        timeout: timeoutInSecond * 1000,
    },
    async function () {
        console.log('Before scenario slow ...');
    },
);
