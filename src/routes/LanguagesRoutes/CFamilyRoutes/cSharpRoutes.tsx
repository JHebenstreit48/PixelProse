import { RouteObject } from "react-router-dom";

// -------------------- C Family > C# > Basics > Fundamentals Routes Start --------------------
import CSharpIntro from "@/Pages/LanguagesPages/CFamilyPages/CSharp/Basics/Fundamentals/Introduction";
import CSharpSyntax from "@/Pages/LanguagesPages/CFamilyPages/CSharp/Basics/Fundamentals/Syntax";
// -------------------- C Family > C# > Basics > Fundamentals Routes End --------------------

// -------------------- C Family > C# > Basics > Core Concepts Routes Start --------------------
import CSharpOOP from "@/Pages/LanguagesPages/CFamilyPages/CSharp/Basics/CoreConcepts/OOP";
import CSharpCollections from "@/Pages/LanguagesPages/CFamilyPages/CSharp/Basics/CoreConcepts/Collections";
import CSharpConsole from "@/Pages/LanguagesPages/CFamilyPages/CSharp/Basics/CoreConcepts/Console";
import CSharpOperators from "@/Pages/LanguagesPages/CFamilyPages/CSharp/Basics/CoreConcepts/Operators";
import CSharpControlFlow from "@/Pages/LanguagesPages/CFamilyPages/CSharp/Basics/CoreConcepts/ControlFlow";
// -------------------- C Family > C# > Basics > Core Concepts Routes End --------------------


const cSharpRoutes: RouteObject[] = [

    // --------------- C Family > C# > Basics > Fundamentals ---------------
    {
        path: "/cfamily/csharp/basics/fundamentals/intro",
        element: <CSharpIntro />
    },
    {
        path: "/cfamily/csharp/basics/fundamentals/syntax",
        element: <CSharpSyntax />
    },
    // --------------- C Family > C# > Basics > Fundamentals End ---------------

    // --------------- C Family > C# > Basics > Core Concepts Start ---------------
    {
        path: "/cfamily/csharp/basics/coreconcepts/oop",
        element: <CSharpOOP />
    },
    {
        path: "/cfamily/csharp/basics/coreconcepts/collections",
        element: <CSharpCollections />
    },
    {
        path: "/cfamily/csharp/basics/coreconcepts/console",
        element: <CSharpConsole />
    },
    {
        path: "/cfamily/csharp/basics/coreconcepts/operators",
        element: <CSharpOperators />
    },
    {
        path: "/cfamily/csharp/basics/coreconcepts/controlflow",
        element: <CSharpControlFlow />
    }
    // --------------- C Family > C# > Basics > Core Concepts End ---------------


];

export default cSharpRoutes;

