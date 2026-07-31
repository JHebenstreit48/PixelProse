import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
