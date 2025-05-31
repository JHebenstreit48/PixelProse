import { RouteObject } from "react-router-dom";

// -------------------- C Basics Routes Start --------------------
import CSharpIntro from "@/Pages/LanguagesPages/CFamilyPages/CSharp/Basics/Fundamentals/Introduction";
import CSharpSyntax from "@/Pages/LanguagesPages/CFamilyPages/CSharp/Basics/Fundamentals/Syntax";
// --------------------- C Basics Routes End ---------------------

// -------------------- C Advanced Routes Start --------------------

// ---------------------- C Advanced Routes End ---------------------


const cSharpRoutes: RouteObject[] = [

    // --------------- C Family > C# > Basics > Fundamentals ---------------
    {
        path: "/cfamily/csharp/basics/fundamentals/intro",
        element: <CSharpIntro />
    },
    {
        path: "/cfamily/csharp/basics/fundamentals/syntax",
        element: <CSharpSyntax />
    }
    // --------------- C Family > C# > Basics > Fundamentals End ---------------

    // -------------------- C Basics > Data Handling Start --------------------

    // --------------------- C Basics > Data Handling End ---------------------

    // -------------------- C Basics > Program Flow Start --------------------
    // --------------------- C Basics > Program Flow End ---------------------

    // --------------- C Family > C Basics End ---------------

    // ----------------- C Family > C Advanced Start -----------------
];

export default cSharpRoutes;

