import { RouteObject } from "react-router-dom";

// ========================= C Family Routes =========================

// ------------------------- C Routes Start -------------------------

// -------------------- C Basics Routes Start --------------------
import CIntro from "@/Pages/LanguagesPages/CFamilyPages/C/Basics/Introduction";
import CSyntax from "@/Pages/LanguagesPages/CFamilyPages/C/Basics/Syntax";
import CControlFlow from "@/Pages/LanguagesPages/CFamilyPages/C/Basics/ControlFlow";
import CDataTypes from "@/Pages/LanguagesPages/CFamilyPages/C/Basics/DataTypes";
// --------------------- C Basics Routes End ---------------------

// -------------------- C Advanced Routes Start --------------------

// ---------------------- C Advanced Routes End ---------------------


const cFamilyRoutes: RouteObject[] = [

    // --------------- C Family > C Basics Start ---------------

    // -------------------- C Basics > Intro & Syntax Start --------------------
    {
        path: "/cfamily/c/basics/intro-syntax/introduction",
        element: <CIntro />
    },
    {
        path: "/cfamily/c/basics/intro-syntax/syntax",
        element: <CSyntax />
    },
    // --------------------- C Basics > Intro & Syntax End ---------------------

    // -------------------- C Basics > Data Handling Start --------------------
    {
        path: "/cfamily/c/basics/data-handling/datatypes",
        element: <CDataTypes />
    },
    {
        path: "/cfamily/c/basics/data-handling/variables",
        element: <CDataTypes />  
    },
    // --------------------- C Basics > Data Handling End ---------------------

    // -------------------- C Basics > Program Flow Start --------------------
    {
        path: "/cfamily/c/basics/program-flow/control",
        element: <CControlFlow />
    },
    {
        path: "/cfamily/c/basics/program-flow/functions",
        element: <CControlFlow />
    }
    // --------------------- C Basics > Program Flow End ---------------------

    // --------------- C Family > C Basics End ---------------

    // ----------------- C Family > C Advanced Start -----------------
];

export default cFamilyRoutes;

