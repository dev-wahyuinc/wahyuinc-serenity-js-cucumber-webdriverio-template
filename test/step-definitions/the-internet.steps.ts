import { Given, Then, When } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import { Authenticate, VerifyAuthentication } from '../serenity/authentication';
import { PickExample } from '../serenity/examples';

/**
 * Below step definitions use Cucumber Expressions
 * see: https://cucumber.io/docs/cucumber/cucumber-expressions/
 *
 * {actor} and {pronoun} are custom expressions defined under support/parameters.ts
 */
Given(
    '{actor} starts with the {string} example',
    async (actor: Actor, exampleName: string) =>
        actor.attemptsTo(Navigate.to('/'), PickExample.called(exampleName)),
);

When(
    '{pronoun} log(s) in using {string} and {string}',
    async (actor: Actor, username: string, password: string) =>
        actor.attemptsTo(Authenticate.using(username, password)),
);

/**
 * If you need to use a RegExp instead of Cucumber Expressions like {actor} and {pronoun}
 * you can use actorCalled(name) and actorInTheSpotlight() instead
 *
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorCalled
 *  see: https://serenity-js.org/modules/core/function/index.html#static-function-actorInTheSpotlight
 */
Then(
    '{pronoun} should see that authentication has {string}',
    async (pronoun: Actor, expectedOutcome: string) =>
        pronoun.attemptsTo(VerifyAuthentication[expectedOutcome]()),
);
