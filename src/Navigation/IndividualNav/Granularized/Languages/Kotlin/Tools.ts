import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const Tools: Subpage = {
  name: "Tools",
  subpages: [
    {
      name: "Build & Config",
      subpages: [
        {
          name: "Gradle Kotlin DSL",
          path: "/kotlin/tools/build-and-config/gradle-kotlin-dsl"
        },
        {
          name: "Multiplatform Plugin",
          path: "/kotlin/tools/build-and-config/multiplatform-plugin"
        }
      ]
    },
    {
      name: "Codegen & Serialization",
      subpages: [
        {
          name: "KAPT vs KSP",
          path: "/kotlin/tools/codegen-and-serialization/kapt-vs-ksp"
        },
        {
          name: "kotlinx.serialization",
          path: "/kotlin/tools/codegen-and-serialization/kotlinx-serialization"
        }
      ]
    },
    {
      name: "IDE & Lint",
      subpages: [
        {
          name: "IntelliJ Setup",
          path: "/kotlin/tools/ide-and-lint/intellij-setup"
        },
        {
          name: "ktlint & detekt",
          path: "/kotlin/tools/ide-and-lint/ktlint-and-detekt"
        }
      ]
    }
  ]
};

export default Tools;