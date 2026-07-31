import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const FoldersAndAssets = () => {
  const markdownFilePath = 'Engines/Godot/Basics/ProjectSetup/FoldersAndAssets';

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
