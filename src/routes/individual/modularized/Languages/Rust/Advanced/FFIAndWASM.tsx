import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CFFIAndBindgen = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/FFIAndWASM/CFFIAndBindgen'));
const WASMAndMemory = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/FFIAndWASM/WASMAndMemory'));

const FFIAndWASM: RouteObject[] = [
  {
    path: '/rust/advanced/ffi-and-wasm/c-ffi-and-bindgen',
    element: <CFFIAndBindgen />,
  },
  {
    path: '/rust/advanced/ffi-and-wasm/wasm-and-memory',
    element: <WASMAndMemory />,
  },
];

export default FFIAndWASM;
