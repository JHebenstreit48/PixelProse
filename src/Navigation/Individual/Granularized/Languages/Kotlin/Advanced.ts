import { Subpage } from "@/Navigation/Combined/Core/NavigationTypes";

const Advanced: Subpage = {
  name: "Advanced",
  subpages: [
    {
      name: "Coroutines",
      subpages: [
        {
          name: "Structured Concurrency",
          path: "/kotlin/advanced/coroutines/structured-concurrency"
        },
        {
          name: "Channels & Select",
          path: "/kotlin/advanced/coroutines/channels-and-select"
        }
      ]
    },
    {
      name: "Interop",
      subpages: [
        {
          name: "Java Interop",
          path: "/kotlin/advanced/interop/java-interop"
        },
        {
          name: "JNI & Native",
          path: "/kotlin/advanced/interop/jni-and-native"
        }
      ]
    },
    {
      name: "Multiplatform",
      subpages: [
        {
          name: "KMP Basics",
          path: "/kotlin/advanced/multiplatform/kmp-basics"
        },
        {
          name: "expect/actual",
          path: "/kotlin/advanced/multiplatform/expect-actual"
        }
      ]
    },
    {
      name: "DSL & Builders",
      subpages: [
        {
          name: "Kotlin DSL Patterns",
          path: "/kotlin/advanced/dsl-and-builders/kotlin-dsl-patterns"
        },
        {
          name: "Type-Safe Builders",
          path: "/kotlin/advanced/dsl-and-builders/type-safe-builders"
        }
      ]
    },
    {
      name: "Performance",
      subpages: [
        {
          name: "Inline & Value Classes",
          path: "/kotlin/advanced/performance/inline-and-value-classes"
        },
        {
          name: "Allocation & Profiling",
          path: "/kotlin/advanced/performance/allocation-and-profiling"
        }
      ]
    }
  ]
};

export default Advanced;