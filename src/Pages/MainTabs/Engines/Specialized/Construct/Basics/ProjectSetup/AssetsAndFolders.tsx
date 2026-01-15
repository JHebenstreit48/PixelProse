import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AssetsAndFolders = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/ProjectSetup/AssetsAndFolders';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Assets & Folders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssetsAndFolders;
