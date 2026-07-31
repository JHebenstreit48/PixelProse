import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OwnershipAndMoves = () => {
  const markdownFilePath = 'Languages/Rust/Basics/Ownership/OwnershipAndMoves';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ownership & Moves" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OwnershipAndMoves;
