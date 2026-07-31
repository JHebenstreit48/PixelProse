import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const FilesAndPaths = () => {
  const markdownFilePath = 'Languages/Java/Basics/IOBasics/FilesAndPaths';

  return (
    <>
      <PageLayout>
        <PageTitle title="Files & Paths" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FilesAndPaths;
