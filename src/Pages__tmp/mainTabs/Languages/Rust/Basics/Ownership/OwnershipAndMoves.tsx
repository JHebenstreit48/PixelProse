import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
