# Joe's Resume

It's not enough to put together my resume in some google doc and export as a pdf, I need to make it a project that includes an API service and a front end framework to render the details.

For now, I'm relying on a very simple TypeScript + Express.js driven API service ([birddog](https://github.com/smokinjoe/birddog)) to provide the data necessary for my resume to render at, https://react-resume-v2.fly.dev

I hope you enjoy!

# Variations in state management

Went through the exercise in implementing three different methods of managing the app state that each of the various components reads my resume data from to render to the client.

## React Context

You can view the `state-managers/react-context` [branch linked here](https://github.com/smokinjoe/react-resume-v2/tree/state-managers/react-context).

In it, I initialize a [ResumeContext](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/react-context/src/context/ResumeContext.ts), and then when my GET request completes I'm able to populate the [Context provider](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/react-context/src/components/Resume/ResumeContainer.tsx#L25).

Then in [each component that requires resume data](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/react-context/src/components/Resume/Skills.tsx), I read the data from the context.

## Jotai

You can view the `state-managers/jotai` [branch linked here](https://github.com/smokinjoe/react-resume-v2/tree/state-managers/jotai).

With Jotai, I need to start off by wrapping my [app with a provider](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/jotai/src/App.tsx#L28), then create the atomic piece of state I want to manage. In which case, [I setup and initialize a Resume atom](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/jotai/src/atoms/resume.ts#L23), and then am able to create [subsets of atoms](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/jotai/src/atoms/resume.ts#L25) based on the properties of my Resume. 

Then in my components, [I access the specific atom I need](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/jotai/src/components/Resume/Skills.tsx#L7) and render that data to the client.

## Zustand

You can view the `state-managers/zustand` [branch linked here](https://github.com/smokinjoe/react-resume-v2/tree/state-managers/zustand).

With Zustand, I first define the [ApplicationState and build out a store](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/zustand/src/store/resume.ts). 

Once I receive the resume response data, I [utilize the defined setter](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/zustand/src/hooks/useResume.ts#L24) (see above) and now the store is carrying the data.

[Then in each component](https://github.com/smokinjoe/react-resume-v2/blob/state-managers/zustand/src/components/Resume/Skills.tsx#L6), I import the `useStore` and read the appopriate data off of state that I need!
