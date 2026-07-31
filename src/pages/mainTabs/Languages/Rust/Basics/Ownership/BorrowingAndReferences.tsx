import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
