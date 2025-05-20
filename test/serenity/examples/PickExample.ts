import { Duration, Task, Wait } from '@serenity-js/core';
import { Click, isVisible } from '@serenity-js/web';

import { Examples } from './ui/Examples';

/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
export const PickExample = {
    called: (name: string) =>
        Task.where(
            `#actor picks example called ${name}`,
            Wait.upTo(Duration.ofSeconds(10)).until(
                Examples.called(name),
                isVisible(),
            ),
            Click.on(Examples.called(name)),
        ),
};
