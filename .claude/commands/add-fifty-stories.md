---
description: 'Create 50 stories for a given component'
argument-hint: [message]
---

Generate Storybook stories for a React component named $ARGUMENTS located in the @src/ directory with the following specifications:

- If the component file does not exist, respond with "Component $ARGUMENTS does not exist"
- If the file $ARGUMENTS.stories.tsx already exists, lookup the ammount of stories inside, and exit if there are already 50 or more stories.
- If the file $ARGUMENTS.stories.tsx already exists, lookup the ammount of stories inside, and if there are less than 50 stories, append new stories until there are 50 stories total. If there are already 50 or more stories.
- Ensure each story demonstrates a different aspect or variation of the component's functionality or appearance.
