# React Theme Changer

This is a simple hook which lets you change your theme based on "class" in tailwind css. It supports both React and Next.js.

## Usage

Install the package using your favourite package manager.

Using npm:
```bash
npm i @lovenmonsters/theme-changer
```
Using yarn:
```bash
yarn add @lovenmonsters/theme-changer
```
Import useTheme function from @lovenmonsters/theme-changer in your component and follow the example below.
```js
import { useTheme } from "@lovenmonsters/theme-changer";
```

## Example Code
```js
import Head from "next/head";
import { useTheme } from "@lovenmonsters/theme-changer";

export default function Home() {
  const [colorTheme, setColorTheme] = useTheme();

  return (
    <>
      <Head>
        <title>Theme Changer</title>
        <meta name="description" content="React Theme Changer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen flex justify-center items-center">
        {colorTheme === "light" ? (
          <button
            className="text-yellow-500"
            onClick={() => setColorTheme("light")}
          >
            Change to Light
          </button>
        ) : (
          <button
            className="text-indigo-600"
            onClick={() => setColorTheme("dark")}
          >
            Change to Dark
          </button>
        )}
      </div>
    </>
  );
}
```
