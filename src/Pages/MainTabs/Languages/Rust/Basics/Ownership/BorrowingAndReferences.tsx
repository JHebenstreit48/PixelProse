import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BorrowingAndReferences = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Ownership/BorrowingAndReferences';

  return (
    <>
      <PageLayout>
        <PageTitle title="Borrowing & References" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BorrowingAndReferences;
