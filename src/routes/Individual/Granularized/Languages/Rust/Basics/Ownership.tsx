import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OwnershipAndMoves = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Ownership/OwnershipAndMoves'));
const BorrowingAndReferences = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Ownership/BorrowingAndReferences'));

const Ownership: RouteObject[] = [
  {
    path: '/rust/basics/ownership/ownership-and-moves',
    element: <OwnershipAndMoves />,
  },
  {
    path: '/rust/basics/ownership/borrowing-and-references',
    element: <BorrowingAndReferences />,
  },
];

export default Ownership;
