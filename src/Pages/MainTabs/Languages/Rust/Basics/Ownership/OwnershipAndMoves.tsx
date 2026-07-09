import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
