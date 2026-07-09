import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
