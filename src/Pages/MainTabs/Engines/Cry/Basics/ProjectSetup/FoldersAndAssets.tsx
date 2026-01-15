import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FoldersAndAssets = () => {
  const markdownFilePath = 'Engines/Cry/Basics/ProjectSetup/FoldersAndAssets';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Folders & Assets" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FoldersAndAssets;
