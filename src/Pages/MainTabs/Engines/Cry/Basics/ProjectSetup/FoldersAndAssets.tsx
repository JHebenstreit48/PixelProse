import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FoldersAndAssets = () => {
  const markdownFilePath = 'Engines/Cry/Basics/ProjectSetup/FoldersAndAssets';

  return (
    <>
      <PageLayout>
        <PageTitle title="Folders & Assets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FoldersAndAssets;
