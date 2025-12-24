import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FilesAndPaths = () => {
  const markdownFilePath = 'Languages/Java/Basics/IOBasics/FilesAndPaths';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Files & Paths" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FilesAndPaths;
