import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const AssetsAndFolders = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/ProjectSetup/AssetsAndFolders';

  return (
    <>
      <PageLayout>
        <PageTitle title="Assets & Folders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssetsAndFolders;
